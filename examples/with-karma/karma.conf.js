// Karma configuration
// Generated on Tue Dec 15 2020 11:39:01 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    proxies: {
      "/mockServiceWorker.js": "/base/test/msw/mockServiceWorker.js",
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["chai", "mocha"],

    // list of files / patterns to load in the browser
    files: [
      { pattern: require.resolve("requirejs/require"), watched: false },
      {
        pattern: require.resolve("karma-requirejs/lib/adapter"),
        watched: false,
      },

      { pattern: "src/**/*.js", included: false },
      { pattern: "test/**/*.js", included: false },

      {
        pattern: "node_modules/msw-requirejs/dist/msw-requirejs.js",
        included: false,
      },

      "./test-main.js",
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    client: {
      mocha: {
        reporter: "html",
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
