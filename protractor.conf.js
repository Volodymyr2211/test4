const conf = {
    specs: ['./specs/**/*.spec.js'],
    framework: 'mocha',
    chromeOnly: true,
    directConnect: true,
    mochaOpts: {
      timeout: 30 * 1000,
      reporter: 'mochawesome',
    reporterOptions: {
      overwrite: false 
        }
    },
    onPrepare() {
      browser.waitForAngularEnabled(false)
    },
    SELENIUM_PROMISE_MANAGER: false

  
  };
  
  exports.config = conf