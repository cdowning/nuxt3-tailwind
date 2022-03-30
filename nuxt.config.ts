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
        // '~/assets/scss/tailwind.scss', // sass
        // '~/assets/css/tailwind.css', // css
        // '~/assets/scss/variables.scss'
        '~/assets/scss/fonts.scss',
        '~/assets/scss/main.scss',
    ],

    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.css',
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
