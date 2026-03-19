import { defineEventHandler, readBody, createError } from 'h3'

interface SubscribeBody {
  email: string
  source: 'apply' | 'newsletter'
}

// Simple in-memory rate limit (resets on cold start, good enough for MVP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5 // max submissions per window
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export default defineEventHandler(async (event) => {
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

  // Store via Nitro storage (filesystem in dev, configurable in production)
  const storage = useStorage('data')
  const key = 'subscribers'
  const existing: Array<{ email: string; source: string; timestamp: string; ip: string }> =
    (await storage.getItem(key)) || []

  // Deduplicate
  if (existing.some(e => e.email === email)) {
    return { ok: true, message: 'Already subscribed.' }
  }

  existing.push({
    email,
    source,
    timestamp: new Date().toISOString(),
    ip,
  })

  await storage.setItem(key, existing)

  // If Resend API key is configured, also send via Resend
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      await $fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
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

  return { ok: true, message: 'Subscribed successfully.' }
})
