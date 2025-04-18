import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    modules: ['shadcn-nuxt', '@nuxt/image'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    image: {
        dir: 'assets/images'
    },
})