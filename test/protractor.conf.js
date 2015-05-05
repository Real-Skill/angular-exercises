module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
        'features/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: process.env.PRODUCTION_IP || 'http://localhost:9000',

    allScriptsTimeout: 100000,

    cucumberOpts: {
        tags: ['~@ignore'],
        require: 'features/step_definitions/*.js',
        format: 'pretty',
        timeout: 100000
    },

    onPrepare: function ()
    {
        'use strict';
        browser.manage().window().setSize(1366, 768);
    },
    params: {
        glob: 'test'
    }
};
