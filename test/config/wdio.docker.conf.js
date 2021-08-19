const { config } = require('./wdio.shared.conf')

exports.config = {
  ...config,
  ...{
    services: ['docker'],
    hostname: 'localhost',
    port: 4444,
    capabilities: [
      {
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            'headless'
          ],
        }
      },
      {
        maxInstances: 5,
        browserName: 'firefox',
        "moz:firefoxOptions": {

        }
      },
 
    ]
  }
}

