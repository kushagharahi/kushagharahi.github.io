const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')

const paths = [ '/', 
                '/blog', 
                '/resume', 
                '/contact', 
                '/projects', 
                '/blog/first_blog_post', 
                '/blog/access_localhost_from_vm_in_host_computer', 
                '/blog/git_command_line_cheat_sheet', 
                '/blog/asrock_z77_extreme4_gtx_970_high_sierra_hackintosh',
                '/blog/managing_sfdx_static_resources_via_npm_or_yarn',
                '/blog/reset_the_root_password_raspbian_image']

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    compress: true,
  },
  optimization: { 
    minimizer: [
      // plugin uses terser to minify/minimize your JavaScript. Built into webpack5
      new TerserPlugin({
        // remove both the license file and the comments inside the bundle
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      })
    ]
  },
  plugins: [
      /* A plugin for a more aggressive chunk merging strategy. 
         Even similar chunks are merged if the total size is reduced enough. 
         As option modules that are not common in these chunks can be moved up the chunk tree to the parents. */
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      'process.env.NODE_ENV': '"production"'
    }),
    new SitemapPlugin({
      base: 'https://kusha.me', 
      paths: paths, 
      options: {
        skipgzip: true
      }
    }),
    new PrerendererWebpackPlugin({
      routes: paths,
      rendererOptions: {
        //headless: false,
        //maxConcurrentRoutes: 1,
        timeout: 30000,
      }
    }),
  ]
})
