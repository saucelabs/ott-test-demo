const {config} = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // deviceName: 'FireTV Stick 4K',
    deviceName: 'Google ChromecastTV',
    
    platformName: 'Android',
    app: 'storage:filename=com.accuweather.android_5.8.0.4-free-604_minAPI21(nodpi)_apkmirror.com.apk',
    appWaitActivity: 'com.accuweather.accutv.guidedsteps.GuidedActivity',
    appiumVersion: '1.19.0',
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    // Add a name to the test
    name: 'OTT Demo',
  },
];

config.specs = ['./tests/specs/androidtv/**.spec.js']

exports.config = config;
