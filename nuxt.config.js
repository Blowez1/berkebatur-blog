
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
    }]
  },

  css: [
    '@/assets/boostrap/bootstrap.min.css',
    '@/assets/webfonts/MyFontsWebfontsKit.css',
    '@/assets/scss/main.scss'
  ],

  plugins: [],

  components: true,

  buildModules: [],

  loading: {
    color: '#CD2027',
    height: '4px'
  },

  modules: [],

  build: {}
}
