import webpackConfig from './testing'
import * as path from 'path'

const configuration = {
  basePath: '../',
  failOnEmptyTestSuite: true,
  frameworks: ['mocha', 'chai'],

  files: [
    'spec/index.ts',
    'src/index.ts',
    { pattern: 'spec/**/*.spec.ts', watched: true }
  ],

  mime: {
    'text/x-typescript': ['ts', 'tsx']
  },

  plugins: [
    require('karma-webpack'),
    require('karma-mocha'),
    require('karma-coverage-istanbul-reporter'),
    require('karma-coverage'),
    require('karma-chai'),
    require('karma-mocha-reporter'),
    require('karma-notify-reporter'),
    require('karma-chrome-launcher'),
    require('karma-firefox-launcher')
  ],

  exclude: [],

  webpack: webpackConfig,

  webpackMiddleware: {
    noInfo: true,
    quiet: true,
    stats: {
      colors: true
    },
    publicPath: '/'
  },

  preprocessors: {
    'src/**/*.ts': ['webpack'],
    'spec/*.ts': ['webpack']
  },

  reporters: ['mocha', 'coverage-istanbul', 'notify'],

  coverageIstanbulReporter: {
    dir: path.resolve(__dirname, '../coverage'),
    reports: ['html', 'lcov'],
    fixWebpackSourcePaths: false,
    skipFilesWithNoCoverage: true,
    'report-config': {
      html: {
        subdir: 'html'
      },
      lcov: {
        subdir: 'lcov'
      }
    }
  },

  port: 9876,

  client: {
    captureConsole: true,
    clearContext: true
  },

  colors: true,

  autoWatch: true,

  browsers: ['Chrome', 'Firefox'],

  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },

  concurrency: Infinity
}

if (process.env.TRAVIS) {
  configuration.browsers = ['Chrome_travis_ci']
}

export default (config: any) => {
  config.set(configuration)
}
