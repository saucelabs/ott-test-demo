//
// ==================================================================
// More information about the configuration options can be found here
// https://webdriver.io/docs/configurationfile.html
// ==================================================================
//
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    //
    // The specs are configured in derived files

    //
    // ============
    // Capabilities
    // ============
    //
    // The capabilities are configured in derived files
  
    maxInstances: 1,

    //
    // ===================
    // Test Configurations
    // ===================
    //
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    // Services are empty here but will be defined in the
    // - wdio.shared.local.appium.conf.js
    // - wdio.shared.sauce.conf.js
    // configuration files
    services: [],
    reporters: ['spec'],
    framework: 'jasmine',
    jasmineNodeOpts: {
        helpers: [require.resolve('@babel/register')],
        defaultTimeoutInterval: 5 * 60000, // 5 minutes
    },

    //
    // =====
    // Hooks
    // =====
    //
    // Hooks are not used for this project
}
