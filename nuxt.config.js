const desc = ""

export default {

  head: {
    titleTemplate: '%s - Berke Batur Blog',
    title: 'Berke Batur Blog',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: desc
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css'
      }
    ]
  },

  css: [
    '@/assets/webfonts/MyFontsWebfontsKit.css',
    '@/assets/scss/main.scss'
  ],

  plugins: [],

  components: true,

  buildModules: [],

  loading: {
    color: '#707070'
  },

  modules: ['@nuxtjs/axios'],

  build: {}
}
