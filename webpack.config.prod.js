const base = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...base,
    mode: 'production',

    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            chunkFilename: '[id].[contentHash].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },


};