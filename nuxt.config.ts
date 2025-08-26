// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {

  },

  $development: {
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: '2024-04-03',

  routeRules: {
    '/network': {prerender: true, swr: 3600},
    '/login': {redirect: {to: 'enter', statusCode: 303}},
    '/phones/**': {ssr: false}
  },

  app: {
    head: {
      charset: 'utf-8',
      title: 'MSHP_MUSIC',
      link: [
        { rel: 'icon', type: 'imgae.png'}
      ]
    }
  },

  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss']
})