/** @format */

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
     app: {
          head: {
               title: 'Zool Developer | Mukhtar Sulaiman | Portfolio - Développeur Web',
               charset: 'utf-8',
               viewport: 'width=device-width, initial-scale=1',
               meta: [{ name: 'description', content: 'My amazing site.' }],
               link: [
                    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                    {
                         rel: 'preconnect',
                         href: 'https://fonts.gstatic.com',
                         crossorigin: '',
                    },
                    {
                         rel: 'stylesheet',
                         href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,100;1,200;1,400;1,800&display=swap',
                    },
               ],
               style: [],
               script: [],
               noscript: [],
          },
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
     modules: ['nuxt-icon'],
});
