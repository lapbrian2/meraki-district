// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/base.css',
    '~/assets/css/transitions.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Meraki District',
      meta: [
        { name: 'description', content: 'A cultural ecosystem for AI-native creators.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
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
