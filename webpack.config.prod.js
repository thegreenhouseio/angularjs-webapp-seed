const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './components/bootstrap/images/favicon.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'The Greenhouse',
      background: '#efefef',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    }),

    new NgAnnotatePlugin({
      add: true
    }),

    new WebpackMd5Hash(),

    new ExtractTextPlugin('[name].[chunkhash].style.css'),

    new webpack.optimize.ModuleConcatenationPlugin()
  ]

});