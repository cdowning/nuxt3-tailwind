const colors = require('./colors.ts');

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
        // Using this for color palette in storybook
        colors: {
            yellow: colors.yellow,
            blush: colors.blush,
            teal: colors.teal,
            rose: colors.rose,
            green: colors.green,
            cream: colors.cream,
            gray: colors.gray,
            blue: colors.blue,
            purple: colors.purple,
        },
        // colors: {
        //     red: '#f9bfb2',
        //     secondary: 'var(--btn-secondary)',
        // },
        fontFamily: {
            // https://tailwindcss.com/docs/font-family
            poppins: ['Poppins', '-apple-system', 'sans-serif'],
            lato: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            // Add Lobster?
            milkshake: ['Milkshake', '-apple-system', 'serif'],
        },
        // https://type-scale.com/ - Major Third (base 16px)
        fontSize: {
            xs: '0.64rem', // 10.24px
            sm: '0.8rem', // 12.80px
            base: '1rem', // based on 16px base
            md: '1.25rem', // 20.00px
            lg: '1.563rem', // 25.00px
            xl: '1.953rem', // 31.25px
            '2xl': '2.441rem', // 20.00px
            '3xl': '3.052rem', // 48.83px
            '4xl': '3.815rem', // 61.04px
        },
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
