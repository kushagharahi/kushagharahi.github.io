var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'res': path.resolve(__dirname, '../src/res'),
      'models': path.resolve(__dirname, '../src/models'),
      'static': path.resolve(__dirname, '../src/static')
    }
  },
  module: {
    // Special compilation rules
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        include: [
          path.join(__dirname, '../src')
        ],
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [path.resolve(__dirname, '../node_modules')],
        enforce: 'pre',
        options: {
          fix: true,
          configFile: './build/.eslintrc'
        }
      },
      // use vue-loader for all *.vue files
      {
        test: /.vue$/,
        loader: 'vue-loader',
        exclude: [path.resolve(__dirname, '../node_modules')],
        options: {
          name: 'bundle',
          loaders: {
            js: 'babel-loader?presets=es2015'
          }
        }
      },
      {
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: [path.resolve(__dirname, '../node_modules')],
        enforce: 'pre',
        options: {
          fix: true,
          configFile: 'build/.eslintrc'
        }
      },
      {
        test: /\.s[a|c]ss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
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
        use: [
                    {
                        loader: "vue-html-loader"
                    },
                    {
                        loader: "markdown-loader"
                    }
                ]
      }
    ]
  },
  plugins: [
  ]
}
