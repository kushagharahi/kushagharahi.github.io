// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces();
} catch (e) {
  require('os').networkInterfaces = () => ({});
}

var path = require("path");

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'bundle.js',
    // To the `scripts` folder
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      res: path.resolve(__dirname, './src/res')
    }
  },
  module: {
    // Special compilation rules
    rules: [
      // use vue-loader for all *.vue files
      {
        test: /.vue$/,
        loader: 'vue-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          path: './files',
          publicPath: 'files/',
          outputPath: 'files/'
        }
      }
    ]
  }
}