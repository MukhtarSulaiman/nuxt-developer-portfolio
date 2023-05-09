/** @format */
export default defineNuxtConfig({
     app: {
          head: {
               charset: 'utf-8',
               viewport: 'width=device-width, initial-scale=1',
               link: [
                    {
                         rel: 'preconnect',
                         href: 'https://fonts.googleapis.com',
                    },
                    {
                         rel: 'preconnect',
                         href: 'https://fonts.gstatic.com',
                         crossorigin: '',
                    },
                    {
                         rel: 'stylesheet',
                         href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,100;1,200;1,400;1,800&family=Cairo:wght@200;300;400;500;600;700;800&display=swap',
                    },
               ],
               style: [],
               script: [],
               noscript: [],
          },
          pageTransition: { name: 'page', mode: 'out-in' }
     },
     vite: {
          css: {
               preprocessorOptions: {
                    scss: {
                         additionalData: `
                         @use "@/assets/scss/base/_typography.scss" as *;
                         @use "@/assets/scss/components/_buttons" as *;
                         @use "@/assets/scss/utilities/_mixins" as *;
                         @use "@/assets/scss/utilities/_animations" as *;
                         @use "@/assets/scss/utilities/_variables.scss" as *;`,
                    },
               },
          },
     },
     modules: ['nuxt-icon', '@nuxtjs/color-mode', '@nuxtjs/i18n', 'nuxt-security'],
     i18n: {
          vueI18n: './i18n.config.ts'
     },
     colorMode: {
          preference: 'dark', // default value of $colorMode.preference
          fallback: 'light', // fallback value if not system preference found
          classPrefix: '',
     },
     components: [
          {
               path: '~/components',
               extensions: ['.vue'],
          }
     ],
     runtimeConfig: {
          CLIENT_ID: process.env.CLIENT_ID,
          CLIENT_SECRET: process.env.CLIENT_SECRET,
          REDIRECT_URL: process.env.REDIRECT_URL,
          SENDER_USER: process.env.SENDER_USER,
		REFRESH_TOKEN: process.env.REFRESH_TOKEN,
		RECEIVER_USER:  process.env.RECEIVER_USER,

          public: {
               // This object is intended to expose environment variables to the frontend!
          }
     }
});
