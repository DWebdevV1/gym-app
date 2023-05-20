// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'GYM Workout App 2023 - Create your workout today'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})