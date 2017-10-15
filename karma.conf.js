const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;
const srcGlob = './src/**/**/*.js';
const vendorGlob = './src/vendor.js';
const webpackConfig = require('./webpack.config.common');

// known issues with karma and CommonChunksPlugin
// https://github.com/webpack/karma-webpack/issues/24
webpackConfig.plugins[0] = function() {};

process.env.CHROME_BIN = require('puppeteer').executablePath();

// don't fail on eslint errors while developing
webpackConfig.module.rules[0].use[1].options.failOnError = isProductionBuild;

module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      { pattern: vendorGlob, watched: false },
      { pattern: './node_modules/angular-mocks/angular-mocks.js', watched: false },
      { pattern: srcGlob, watched: false }
    ],

    preprocessors: {
      [srcGlob]: ['webpack'],
      [vendorGlob]: ['webpack']
    },

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    port: 9876,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: ['CustomChromeHeadless'],
    customLaunchers: {
      CustomChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'] // https://github.com/Googlechrome/puppeteer/issues/290#issuecomment-322852784
      }
    },
    captureTimeout: 210000, // https://github.com/jasmine/jasmine/issues/1413#issuecomment-334247097
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout: 210000,
    browserNoActivityTimeout: 210000,
    singleRun: shouldSingleRun,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/test-results',
      outputFile: 'test-results.xml',
      suite: 'seed-webapp',
      useBrowserName: false
    },
    coverageReporter: {
      reporters: [{
        type: 'cobertura',
        dir: './reports',
        subdir: 'test-coverage/',
        file: 'coverage.xml'
      }, {
        type: 'html',
        dir: './reports',
        subdir: 'test-coverage/',
        file: 'coverage.html'
      }, {
        type: 'text-summary'
      }]
    }
  });

};