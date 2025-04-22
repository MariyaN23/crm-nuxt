import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    modules: [
      'shadcn-nuxt',
      '@nuxt/image',
      ['@nuxtjs/google-fonts', {
          families: {
              Lato: {
                  wght: [300, 400, 700],
                  ital: [300],
              },
          }
      }],
      '@nuxt/icon',
      '@pinia/nuxt',
    ],

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: 'Ui',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },

    image: {
        dir: 'assets/images'
    },

    pinia: {
        storesDirs: ['./store/**'],
    },

    compatibilityDate: '2025-04-18',
})