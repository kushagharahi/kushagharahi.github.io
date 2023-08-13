const paths = require('../../build/paths');

const baseUrl = 'http://127.0.0.1:8080'

module.exports = {
  ci: {
    collect: {
        numberOfRuns: 1,
        url:  paths.map((path) => baseUrl + path),
        startServerCommand: 'npx http-server dist -p 8080',
      },
    upload: {
      target: "temporary-public-storage",
    }
  },
};