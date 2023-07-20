// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import {InputConfig} from 'c12';

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'GYM Workout App 2023 - Create your workout today'
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@vueuse/nuxt'
    ]
} as InputConfig)