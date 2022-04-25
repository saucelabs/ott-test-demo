const { config } = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  // Keep as JSON, so you can copy/paste it into inspector
  {
    "deviceName": "AppleTV HD",
    "app": "storage:filename=tvOSBrowser.ipa",
    "name": "Webdriver.io Demo",
    "platformName": "iOS",
    // "newCommandTimeout": 300,
    "language": "en",
    "locale": "en",
    "appiumVersion": "1.22.0"
  }
];

config.specs = ['./tests/specs/tvos/**.spec.js']


exports.config = config;
