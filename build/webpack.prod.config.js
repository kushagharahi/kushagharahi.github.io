const webpack = require('webpack')
const config = require('./webpack.dev.config')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default
const path = require('path')
const paths = [ '/', 
                '/blog', 
                '/resume', 
                '/contact', 
                '/projects', 
                '/blog/first_blog_post', 
                '/blog/access_localhost_from_vm_in_host_computer', 
                '/blog/git_command_line_cheat_sheet', 
                '/blog/asrock_z77_extreme4_gtx_970_high_sierra_hackintosh',
                '/blog/managing_sfdx_static_resources_via_npm_or_yarn']
                
config.mode = 'production'
/**A plugin for a more aggressive chunk merging strategy. 
 * Even similar chunks are merged if the total size is reduced enough. 
 * As option modules that are not common in these chunks can be moved up the chunk tree to the parents. */
config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
config.optimization.minimizer.push(new UglifyJsPlugin())
config.plugins.push(new PrerenderSpaPlugin(
  // Absolute path to compiled SPA
  path.resolve(__dirname, '../dist'),
  // List of routes to prerender
  paths,
  {
    ignoreJSErrors: true
  }
))
config.plugins.push(new SitemapPlugin(
  'https://kusha.me', paths, {
    skipGzip: true
  }))

module.exports = config
