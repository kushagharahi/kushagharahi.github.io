const paths = require('../../build/paths');

const baseUrl = 'http://127.0.0.1:8080'
// We want paths with the trailing slash so the paths are the prerendered static pages, not javascript pages.
const pathsWithTrailingSlash = paths.map((path) => {
  if (path !== '/') {
    return `${path}/`
  } else {
    return path
  }
})

module.exports = {
  ci: {
    collect: {
        numberOfRuns: 1,
        url:  pathsWithTrailingSlash.map((path) => baseUrl + path),
        startServerCommand: 'npx http-server dist -p 8080',
      },
    upload: {
      target: "temporary-public-storage",
    }
  },
};