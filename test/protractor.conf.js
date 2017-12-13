/*global process*/
(function ()
{
    'use strict';

    module.exports.config = {
        seleniumAddress: 'http://' + (process.env.PROTRACTOR_HOST || 'localhost') + ':4444/wd/hub',

        framework: 'jasmine2',

        specs: [
            'features/*.spec.js'
        ],

        capabilities: {
            'browserName': 'chrome'
        },

        baseUrl: 'http://' + (process.env.HOSTNAME || 'localhost') + ':9001',

        allScriptsTimeout: 40000,
        resultJsonOutputFile: 'target/report.json',

        onPrepare: function ()
        {
            var jasmineReporters = require('jasmine-reporters');
            var SpecReporter = require('jasmine-spec-reporter');
            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                filePrefix: 'protractor-results',
                savePath: 'target'
            }));
            jasmine.getEnv().addReporter(new SpecReporter());
        }
    };
})();
