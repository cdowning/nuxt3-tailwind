module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        // './nuxt.config.{js,ts}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        // colors: {
        //     red: '#f9bfb2',
        //     secondary: 'var(--btn-secondary)',
        // },
        extend: {
            backgroundColor: {
                lime: 'var(--green-default)',
            },
            colors: {
                hello: '#59981a',
            },
        },
    },
    plugins: [],
};
