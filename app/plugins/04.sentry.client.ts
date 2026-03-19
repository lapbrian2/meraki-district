export default defineNuxtPlugin(() => {
  const dsn = useRuntimeConfig().public.sentryDsn as string | undefined
  if (!dsn) return

  // Dynamic import — only loads Sentry if DSN is configured
  import('@sentry/nuxt').then(({ init, browserTracingIntegration }) => {
    init({
      dsn,
      integrations: [browserTracingIntegration()],
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0.5,
      environment: import.meta.dev ? 'development' : 'production',
    })
  }).catch(() => {
    // Sentry failed to load — not critical
  })
})
