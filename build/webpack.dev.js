const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: false,
  },
  plugins: [
    new ESLintPlugin({
      extensions: [`js`, `jsx`, `vue`],
      cache: false,
      exclude: [path.resolve(__dirname, '../node_modules')],
      fix: true,
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
      useEslintrc: true,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      // Drop Options API from bundle
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
})
