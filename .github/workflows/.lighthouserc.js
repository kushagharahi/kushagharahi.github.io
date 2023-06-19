const paths = require('../../build/paths');

const baseUrl = 'localhost:8080'

module.exports = {
  ci: {
    collect: {
      url: paths.map((path) => baseUrl + path),
    },
  },
};