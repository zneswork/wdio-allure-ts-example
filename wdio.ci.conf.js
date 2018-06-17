// Specific configurations for CI tests execution on Jenkins slave
var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");

// have main config file as default but overwrite environment specific information
exports.config = merge(
  wdioConf.config,
  {
    // Use headless chrome browser for CI testing on Jenkins slave
    capabilities: [
      {
        //max instance of chrome browser instances
        maxInstances: 5,
        browserName: "chrome",

        chromeOptions: {
          args: ["--headless", "--window-size=1920,1080", "--incognito"]
        }
      }
    ]
  },
  { clone: false }
);
