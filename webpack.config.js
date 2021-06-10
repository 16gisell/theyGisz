const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssextracPlugin = require('mini-css-extract-plugin');
// const { loader } = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const {VueLoaderPlugin} = require('vue-loader');
// const vueLoaderConfig = require('./vue-loader.conf')

module.exports ={
    entry:'./frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js',
    },
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                    devMode ? 'style-loader' : miniCssextracPlugin.loader,
                    'css-loader',      
                ],
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: "file-loader",
                  }
                ],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype:true
            }
        }),
        new miniCssextracPlugin({
            filename:'css/bundle.css'
        }),
        new VueLoaderPlugin()
    ],
    devtool: 'sourse-app'
}