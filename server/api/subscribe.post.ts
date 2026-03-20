import { defineEventHandler, readBody, createError, getRequestIP } from 'h3'

interface SubscribeBody {
  email: string
  source: 'apply' | 'newsletter'
}

// In-memory rate limit with automatic pruning (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour
const PRUNE_THRESHOLD = 500

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  // Prune expired entries to prevent unbounded memory growth
  if (rateLimitMap.size > PRUNE_THRESHOLD) {
    for (const [key, val] of rateLimitMap) {
      if (now > val.resetAt) rateLimitMap.delete(key)
    }
  }
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

// Simple hash for IP anonymization (not cryptographic — just avoids storing raw IPs)
async function hashIp(ip: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + '__meraki_salt_2026')
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16)
}

// Write lock to prevent concurrent read-modify-write race conditions
let writeLock: Promise<void> = Promise.resolve()

export default defineEventHandler(async (event) => {
  // CSRF: verify request originates from our domain
  const origin = event.headers.get('origin')
  const allowedOrigins = [
    'https://merakidistrict.ai',
    'https://www.merakidistrict.ai',
    'https://meraki-district.vercel.app',
  ]
  // In development, allow localhost
  const isDev = process.env.NODE_ENV === 'development'
  if (!isDev && origin && !allowedOrigins.some(o => origin.startsWith(o))) {
    throw createError({ statusCode: 403, message: 'Forbidden.' })
  }

  const body = await readBody<SubscribeBody>(event)

  // Validate
  if (!body?.email || typeof body.email !== 'string') {
    throw createError({ statusCode: 400, message: 'Email is required.' })
  }

  const email = body.email.trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, message: 'Invalid email address.' })
  }

  const source = body.source === 'newsletter' ? 'newsletter' : 'apply'

  // Rate limit by IP
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (!checkRateLimit(ip)) {
    throw createError({ statusCode: 429, message: 'Too many requests. Please try again later.' })
  }

  // Hash IP for storage (GDPR: don't store raw IPs alongside email PII)
  const ipHash = await hashIp(ip)

  // Serialize writes to prevent race conditions on concurrent requests
  const result = await new Promise<{ ok: boolean; message: string }>((resolve, reject) => {
    writeLock = writeLock.then(async () => {
      try {
        const storage = useStorage('data')
        const key = 'subscribers'
        const existing: Array<{ email: string; source: string; timestamp: string; ipHash: string }> =
          (await storage.getItem(key)) || []

        // Deduplicate
        if (existing.some(e => e.email === email)) {
          resolve({ ok: true, message: 'Already subscribed.' })
          return
        }

        existing.push({
          email,
          source,
          timestamp: new Date().toISOString(),
          ipHash,
        })

        await storage.setItem(key, existing)
        resolve({ ok: true, message: 'Subscribed successfully.' })
      } catch (err) {
        reject(err)
      }
    })
  })

  // If already subscribed, return early
  if (result.message === 'Already subscribed.') {
    return result
  }

  // If Resend API key is configured, also send via Resend
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      await $fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: {
          email,
          audience_id: process.env.RESEND_AUDIENCE_ID || '',
          unsubscribed: false,
        },
      })
    } catch (err) {
      // Log but don't fail — storage already succeeded
      console.error('[subscribe] Resend API error:', err)
    }
  }

  return result
})
