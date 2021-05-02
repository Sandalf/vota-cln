export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Vota CLN',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Vota CLN',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Encuentra a los candidatos por los que podrás votar en estas proximas elecciones',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/dvegrfypv/image/upload/v1619911584/vota-cln/open-graph_x4quiy.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Vota CLN',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vota CLN',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Encuentra a los candidatos por los que podrás votar en estas proximas elecciones',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dvegrfypv/image/upload/v1619911584/vota-cln/open-graph_x4quiy.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://res.cloudinary.com/dvegrfypv/image/upload/v1619911584/vota-cln/open-graph_x4quiy.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Vota CLN',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', { fix: true }],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
