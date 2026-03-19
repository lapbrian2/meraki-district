export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.error('[Vue Error]', error, '\nInfo:', info)
  }

  // Catch unhandled promise rejections
  if (import.meta.client) {
    window.addEventListener('unhandledrejection', (event) => {
      console.error('[Unhandled Rejection]', event.reason)
    })
  }
})
