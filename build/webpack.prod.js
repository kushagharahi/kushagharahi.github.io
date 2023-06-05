const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default
const path = require('path')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');
const { executablePath } = require('puppeteer');

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
  optimization: { 
    minimizer: [
      // plugin uses terser to minify/minimize your JavaScript. Built into webpack5
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
      /* A plugin for a more aggressive chunk merging strategy. 
         Even similar chunks are merged if the total size is reduced enough. 
         As option modules that are not common in these chunks can be moved up the chunk tree to the parents. */
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true
    }),
    new SitemapPlugin({
      base: 'https://kusha.me', 
      paths: paths, 
      options: {
        skipGzip: true
      }
    }),
    new PrerendererWebpackPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.resolve(__dirname, '../dist'),
      renderer: '@prerenderer/renderer-puppeteer',
      // Required - Routes to render.
      routes: paths,
      postProcess (renderedRoute) {
        // Remove /index.html from the output path if the dir name ends with a .html file extension.
        // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        if (renderedRoute.route.endsWith('.html')) {
          renderedRoute.outputPath = path.resolve(__dirname, '../dist', renderedRoute.route)
        }

      },
      rendererOptions: {
        executablePath: "",
        headless: false,
        launchOptions: {
          executablePath: "/usr/bin/google-chrome-stable"
        }
      }
    })
  ]
})
