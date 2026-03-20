export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    if (import.meta.dev) {
      console.error('[Vue Error]', error, '\nInfo:', info)
    }
  }

  // Catch unhandled promise rejections
  if (import.meta.client) {
    window.addEventListener('unhandledrejection', (event) => {
      if (import.meta.dev) {
        console.error('[Unhandled Rejection]', event.reason)
      }
    })
  }
})
