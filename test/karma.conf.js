// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-02-18 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing
    // tests whenever any file changes
    // Setting the autoWatch option to true will
    // instruct karma to start a server and watch
    // for changes to files, running tests
    // automatically
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    // Jasmine is a behavior driven development
    // framework for JavaScript that has become
    // the most popular choice for testing Angular
    // applications. Jasmine provides functions
    // to help with structuring your tests and
    // also making assertions.
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    // Every JavaScript file listed in the files
    // array will be loaded (executed) by Karma
    // into our PhantomJS scenario in the order
    // listed, just as if they had been added as
    // <script> elements into a real web page.
    // Any Jasmine tests that run incidentally
    // will be recognized by Karma. I make sure
    // to load (1) angular and it's dependencies,
    // (2) angular mocks, and then (3) all my app's
    // source code. Note that the first three
    // entries are loaded from public/components/
    // because they are third-party components
    // installed there by bower.
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/dygraphs/dygraph-combined.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)

    // Keeping a browser window & karma server
    // running during development is productive,
    // but not a good solution for build processes.
    // For that reason karma provides a "continuous
    // integration" mode, which will launch the
    // specified browser(s), run the tests, and close
    // the browser(s). It also supports running tests
    // in PhantomJS, a headless webkit browser which
    // is great for running tests as part of a build.
    // A primary strength of Karma is that there are
    // plugins that let you run tests in a variety
    // of real browsers. PhantomJS is a headless
    // browser perfect for quickly running unit
    // tests from the command line. Our code will
    // basically think its running in a real web
    // browser even though we can't see one.
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
