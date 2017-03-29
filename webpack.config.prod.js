const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {

  devtool: 'source-map',

  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js',
  },

  plugins: [

    new WebpackMd5Hash(),
    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8 : true, keep_fnames: true },
      compress: { screw_ie8: true },
      comments: false,
      sourceMap: true
    }),
    new ExtractTextPlugin('[name].[chunkhash].style.css')
  ]

});