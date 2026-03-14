export type EmailSource = 'apply' | 'newsletter'

interface StoredEmail {
  email: string
  source: EmailSource
  timestamp: string
}

export function useEmailCollection(source: EmailSource) {
  const email = ref('')
  const status = ref<'idle' | 'success' | 'error'>('idle')
  const errorMessage = ref('')

  function validate(value: string): string | null {
    if (!value.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.'
    return null
  }

  function submit() {
    const error = validate(email.value)
    if (error) {
      status.value = 'error'
      errorMessage.value = error
      return
    }

    if (!import.meta.client) return

    try {
      const key = 'meraki_emails'
      const existing: StoredEmail[] = JSON.parse(localStorage.getItem(key) || '[]')
      existing.push({
        email: email.value.trim(),
        source,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem(key, JSON.stringify(existing))
      status.value = 'success'
      email.value = ''
    } catch {
      status.value = 'error'
      errorMessage.value = 'Something went wrong. Please try again.'
    }
  }

  function reset() {
    status.value = 'idle'
    errorMessage.value = ''
  }

  return { email, status, errorMessage, submit, reset }
}
