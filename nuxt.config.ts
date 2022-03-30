import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    target: 'static',

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },

    css: [
        '~/assets/css/tailwind.css',
        // '~/assets/scss/variables.scss'
    ],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        exposeConfig: true,
        config: {},
        injectPosition: 0,
    },

    colorMode: {
        classSuffix: '-mode',
    },

    plugins: [],

    components: [{ path: '~/components', extensions: ['vue'] }],

    modules: ['@nuxtjs/color-mode'],
    buildModules: ['@nuxtjs/tailwindcss'],
});
