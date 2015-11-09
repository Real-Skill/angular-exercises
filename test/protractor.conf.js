(function ()
{
    'use strict';

    module.exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',

        framework: 'jasmine2',

        specs: [
            'features/*.spec.js'
        ],

        capabilities: {
            'browserName': 'chrome'
        },

        baseUrl: 'http://127.0.0.1:9001',

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
