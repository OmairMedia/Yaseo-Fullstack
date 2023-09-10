// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The best designers and developers at affordable prices with effective graphic designs, online marketing, websites, mobile apps, branding.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google-site-verification', content: 'w5VKz-1bWCxuqxnfjkarhqudVByoCCYDqAGdSenUSJw' },
        { name: 'yandex-verification', content: '4262134f212c8b22' },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/css/addons.css' },
        { rel: 'apple-touch-icon"', sizes:"180x180",href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: "32x32",href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: "16x16",href: '/images/favicon/favicon-16x16.png' },
        { rel: 'manifest',href: '/images/favicon/site.webmanifest' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/responsive.css' },
        { rel: 'stylesheet', href: '/css/addons.css' },
      ],
      script: [
        { src: '/js/jquery.js' },
        { type:'text/javascript', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4', integrity:'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4', crossorigin: 'anonymous' },
        { type:'text/javascript', src: '//code.tidio.co/g74kcyco68owypkdkzneerwuln8q2lt2.js', async: true },
        { type:'text/javascript', src: 'https://www.googletagmanager.com/gtag/js?id=UA-160840514-1', async: true },
        { type:'text/javascript', src: '/js/gtag.js'},
        { type:'text/javascript', src: 'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/jquery.themepunch.revolution.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/jquery.themepunch.tools.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.actions.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.carousel.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.migration.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.navigation.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.parallax.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js' },
        { type:'text/javascript', src: '/plugins/revolution/js/extensions/revolution.extension.video.min.js' },
        { type:'text/javascript', src: '/js/main-slider-script.js' },
        { type:'text/javascript', src: '/js/jquery.fancybox.js' },
        { type:'text/javascript', src: '/js/wow.js' },
        { type:'text/javascript', src: '/js/appear.js' },
        { type:'text/javascript', src: '/js/select2.min.js' },
        { type:'text/javascript', src: '/js/script.js' },
        { type:'text/javascript', src: '/js/custom.js' },
        { type:'text/javascript', src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11' },
        { type:'text/javascript', src: '/js/form.js' },
      ]
    }
  },
  runtimeConfig: {
   public: {
    FB_API_KEY: 'AIzaSyAms6l3rQajBn0r3uTIN68Cb_ovb8q_TTU',
    FB_AUTH_DOMAIN: 'yaseo-fullstack.firebaseapp.com',
    FB_PROJECT_ID: 'yaseo-fullstack',
    FB_STORAGE_BUCKET: 'yaseo-fullstack.appspot.com',
    FB_MESSAGING_SENDER_ID: '168025898570',
    FB_APP_ID: '1:168025898570:web:b74002397f1bb5f5b6b0b3',
    FB_DATABASE_URL: 'https://yaseo-fullstack-default-rtdb.europe-west1.firebasedatabase.app/'
   }
  }
})
