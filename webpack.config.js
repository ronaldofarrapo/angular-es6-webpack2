'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main:'./app/app.js'
    },

    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'url-loader'},
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            }
        ]
    },   

    plugins: [
        new CleanWebpackPlugin(['dist'], {verbose: true}),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ],

    devServer: {
        contentBase: './public',
        stats: 'minimal',
        compress: true,
        port: 9000,
        proxy: [{
            path: '/demo/api/',
            target: 'http://localhost:8080'
        }]
    }
};

module.exports = config;