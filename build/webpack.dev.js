const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: false,
  },
  plugins: [
    new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
          // Drop Options API from bundle
          __VUE_PROD_DEVTOOLS__: false
    }),
    ]
});