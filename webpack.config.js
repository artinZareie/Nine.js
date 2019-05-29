const path = require('path');

const serverConfig = {
    entry: {
        nine: './src/nine.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].node.js',
        library: 'ninejs',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    mode: 'production',
    watch: true,
    target: 'node'
};

const clientConfig = {
    entry: {
        nine: './src/nine.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    mode: 'production',
    watch: true,
    target: 'web'
};

module.exports = [clientConfig, serverConfig];