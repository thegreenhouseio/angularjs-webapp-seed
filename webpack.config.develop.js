const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {

  devServer: {
    contentBase: './build',
    compress: true,
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    proxy: {
      '/api/*': {
        target: 'http://<your-domain>.com',
        secure: false,
        changeOrigin: true
      }
    }
  }

});