module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
        'features/**/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://0.0.0.0:9001',

    allScriptsTimeout: 40000,

    cucumberOpts: {
        tags: ['~@ignore'],
        require: 'features/step_definitions/*.js',
        format: 'pretty',
        timeout: 20000
    },

    onPrepare: function ()
    {
        browser.manage().window().setSize(1280, 1024);
    }
};
