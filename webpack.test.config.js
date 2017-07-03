'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        main:'./app/app.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'url-loader'}
        ]
    },   

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ]
};

module.exports = config;