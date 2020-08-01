
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },


};