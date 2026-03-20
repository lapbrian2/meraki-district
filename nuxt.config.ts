// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  sourcemap: false,
  modules: ['@nuxtjs/sitemap', '@nuxt/content'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://meraki-district.vercel.app',
  },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/base.css',
    '~/assets/css/transitions.css',
  ],
  build: {
    transpile: ['gsap'],
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vercel.live https://vitals.vercel-insights.com https://va.vercel-scripts.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
      },
    },
  },
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN || '',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Meraki Road',
      meta: [
        { name: 'description', content: 'A cultural ecosystem for AI-native creators who refuse to choose between ambition and integrity. Ten districts. One road. A new standard for creative practice.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Meraki Road \u2014 Where craft meets culture' },
        { property: 'og:description', content: 'A cultural ecosystem for AI-native creators. Ten districts. One road. A new standard for creative practice.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL || 'https://meraki-district.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Meraki Road \u2014 Where craft meets culture' },
        { name: 'twitter:description', content: 'A cultural ecosystem for AI-native creators. Ten districts. One road.' },
        { name: 'theme-color', content: '#09090B' },
        { property: 'og:site_name', content: 'Meraki Road' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: (process.env.NUXT_PUBLIC_SITE_URL || 'https://meraki-district.vercel.app') + '/images/og-default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: (process.env.NUXT_PUBLIC_SITE_URL || 'https://meraki-district.vercel.app') + '/images/og-default.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Outfit:wght@300;400;500;600&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
