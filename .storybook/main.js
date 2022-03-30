const path = require('path');

module.exports = {
    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: ['sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
    stories: [
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
        // '../components/**/*.stories.mdx',
        // '../stories/**/*.stories.mdx',
        // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    core: { builder: 'storybook-builder-vite' },
    framework: '@storybook/vue3',
};
