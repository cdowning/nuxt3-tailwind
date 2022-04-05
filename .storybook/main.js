const path = require('path');

module.exports = {
    async viteFinal(config, { configType }) {
        // customize the Vite config here

        // return the customized config
        return config;
    },
    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need

        // config.resolve.alias['~'] = path.resolve(__dirname, '../');
        // config.resolve.alias['@'] = path.resolve(__dirname, '../');
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.dirname(path.resolve(__dirname)),
            '~': path.dirname(path.resolve(__dirname)),
        };

        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['sass-loader'],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 1000, // 1kB
                            name: 'img/[name].[contenthash:7].[ext]',
                        },
                    },
                ],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                use: [{ loader: 'file-loader' }],
            },
            {
                test: /\.(webm|mp4|ogv)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'videos/[name].[contenthash:7].[ext]',
                        },
                    },
                ],
            }
        );

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
    features: {
        storyStoreV7: true,
    },
    core: { builder: '@storybook/builder-vite' },
    framework: '@storybook/vue3',
};
