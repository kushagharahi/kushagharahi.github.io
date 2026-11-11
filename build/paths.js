const posts = require('../src/content/blog/posts.json')

const staticPaths = [
  '/',
  '/blog',
  '/open-source',
  '/resume',
  '/contact',
  '/projects',
]

const blogPaths = posts.map((post) => `/blog/${post.name}`)

const paths = [...staticPaths, ...blogPaths]

module.exports.paths = paths

module.exports.pathsWithTrailingSlash = paths.map((path) => {
  if (path !== '/') {
    return `${path}/`
  } else {
    return path
  }
})
