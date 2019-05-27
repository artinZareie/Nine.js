const path = require('path');

module.exports = {
    entry: {
        nine: './src/nine.js'
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
    watch: true
};