export type EmailSource = 'apply' | 'newsletter'

export function useEmailCollection(source: EmailSource) {
  const email = ref('')
  const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const errorMessage = ref('')

  function validate(value: string): string | null {
    if (!value.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.'
    return null
  }

  async function submit() {
    const error = validate(email.value)
    if (error) {
      status.value = 'error'
      errorMessage.value = error
      return
    }

    status.value = 'submitting'

    try {
      const res = await $fetch('/api/subscribe', {
        method: 'POST',
        body: {
          email: email.value.trim(),
          source,
        },
      })
      status.value = 'success'
      email.value = ''
    } catch (err: any) {
      status.value = 'error'
      errorMessage.value = err?.data?.message || 'Something went wrong. Please try again.'
    }
  }

  function reset() {
    status.value = 'idle'
    errorMessage.value = ''
  }

  return { email, status, errorMessage, submit, reset }
}
