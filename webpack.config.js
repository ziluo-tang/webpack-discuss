const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack'
        }),
        new WebPlugin({
            filename: 'web-webpack-plugin.html',
            title: 'web-webpack-plugin',
            requires: ['bundle']
        })
    ]
}