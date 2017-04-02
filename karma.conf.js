const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;
const browser = isProductionBuild ? 'PhantomJS' : 'Chrome';
const webpackConfig = require('./webpack.config.common');

// TODO issues with karma and CommonChunksPlugin
// https://github.com/webpack/karma-webpack/issues/24
webpackConfig.plugins[2] = function() {};


module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      { pattern: './node_modules/angular/angular.js', watched: false },
      { pattern: './node_modules/angular-mocks/angular-mocks.js', watched: false },
      { pattern: 'src/**/*.spec.js', watched: false }
    ],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'coverage']
    },

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    port: 9876,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: [browser],
    singleRun: shouldSingleRun,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/',
      outputFile: 'test-results.xml',
      suite: 'seed-webapp',
      useBrowserName: false
    },
    coverageReporter: {
      type : 'cobertura',
      dir : './reports',
      subdir: 'coverage'
    }
  });

};