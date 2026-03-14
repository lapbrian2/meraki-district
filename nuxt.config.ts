// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://meraki-district.vercel.app',
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
      },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Meraki District',
      meta: [
        { name: 'description', content: 'A cultural ecosystem for AI-native creators who refuse to choose between ambition and integrity. Ten institutions. One district. A new standard for creative practice.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Meraki District \u2014 Where craft meets culture' },
        { property: 'og:description', content: 'A cultural ecosystem for AI-native creators. Ten institutions. One district. A new standard for creative practice.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://meraki-district.vercel.app' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Meraki District \u2014 Where craft meets culture' },
        { name: 'twitter:description', content: 'A cultural ecosystem for AI-native creators. Ten institutions. One district.' },
        { name: 'theme-color', content: '#09090B' },
        { property: 'og:site_name', content: 'Meraki District' },
        { property: 'og:locale', content: 'en_US' },
      ],
      link: [
        { rel: 'canonical', href: 'https://meraki-district.vercel.app' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300;1,500&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/style.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-mono/style.min.css' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
