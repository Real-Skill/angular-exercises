// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-09-07 using
// generator-karma 0.8.3

module.exports = function (config)
{
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.js', 'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-gettext/dist/angular-gettext.js', 'app/app.js', 'test/spec/**/*.spec.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        reporters: ['spec', 'junit', 'coverage'],

        preprocessors: {
            'app/**/*.js': 'coverage'
        },

        coverageReporter: {
            dir: 'test/target/',
            type: 'cobertura',
            file: 'coverage.xml'
        },

        junitReporter: {
            outputFile: 'test/target/test-results.xml'
        },


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
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher', 'karma-jasmine', 'karma-spec-reporter', 'karma-junit-reporter', 'karma-coverage' ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        //https://github.com/karma-runner/karma/issues/895
        usePolling: true
        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};

