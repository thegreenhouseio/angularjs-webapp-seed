
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js',
    vendor: './vendor.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader' // see .babelrc for all "options"
      }, {
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true
        }
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    })
  ]

};