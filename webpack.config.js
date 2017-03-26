// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces()
} catch (e) {
  require('os').networkInterfaces = () => ({})
}

var path = require('path')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'bundle.js',
    // To the `scripts` folder
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'res': path.resolve(__dirname, './src/res'),
      'models': path.resolve(__dirname, './src/models')
    }
  },
  module: {
    // Special compilation rules
    rules: [
      {
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: [path.resolve(__dirname, 'node_modules')],
        enforce: 'pre',
        options: {
          fix: true
        }
      },
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
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: 'font/',
          outputPath: 'font/'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: 'imgs/',
          outputPath: 'imgs/'
        }
      }
    ]
  }
}
