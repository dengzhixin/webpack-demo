const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contentHash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "./src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/i,
                use:['file-loader']
            },
            {
                test: /\.styl$/i,
                use:['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/i,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options:{
                            implementation:require('dart-sass')
                        }
                    },
                ],
            }
        ]
    }


}
