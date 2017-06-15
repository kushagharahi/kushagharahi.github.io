// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
// try {
//   require('os').networkInterfaces()
// } catch (e) {
//   require('os').networkInterfaces = () => ({})
// }

var webpack = require('webpack')
var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[chunkhash].js',
    // To the `scripts` folder
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'res': path.resolve(__dirname, './src/res'),
      'models': path.resolve(__dirname, './src/models'),
      'static': path.resolve(__dirname, './src/static')
    }
  },
  module: {
    // Special compilation rules
    rules: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, 'src')
      ],
      exclude: path.join(__dirname, 'node_modules')
    },
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
          name: 'bundle',
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
      },
      {
        test: /\.(ic)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: 'imgs/',
          outputPath: 'imgs/'
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
          // assumes vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, './dist'),
      // List of routes to prerender
       ['/', '/blog', '/blog/first_blog_post', '/resume', '/contact', '/projects' ]
    )
  ]
}
