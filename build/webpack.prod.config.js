var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')
var config = require('./webpack.dev.config')

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module) {
    // assumes vendor imports exist in the node_modules directory
    return module.context && module.context.indexOf('node_modules') !== -1
  }
}));
config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.plugins.push(new PrerenderSpaPlugin(
  // Absolute path to compiled SPA
  path.join(__dirname, '../dist'),
  // List of routes to prerender
  ['/', '/blog', '/blog/first_blog_post', '/resume', '/contact', '/projects', '/blog/access_localhost_from_vm_in_host_computer']
));

module.exports = config;


