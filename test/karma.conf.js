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
            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-growl-v2/build/angular-growl.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            // endbower
            'app/**/*.html',
            'app/app.js',
            'app/app-run.js',
            'views/site/auth/main/about/*.js',
            'app/views/site/auth/main/*.js',
            'app/views/site/auth/register/*.js',
            'app/views/site/auth/menu/*.js',
            'app/views/site/auth/*.js',
            'app/views/site/*.js',
            'app/services/**/**/*.js',
            'test/spec/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

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
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-spec-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        preprocessors: {
            'app/*.js': 'coverage',
            'app/!(bower_components)/**/*.js': 'coverage',
            'app/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'templates'
        },

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            dir: 'target/',
            type: 'cobertura',
            file: 'coverage.xml'
        },

        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO
    });
};
