const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devServer: {
    compress: false,
    port: 8080,
    historyApiFallback: true
  },
  entry: './src/vue/main.js',
  output: {
    filename: '[name].js?[hash]',
    chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'res': path.resolve(__dirname, '../src/res'),
      'content': path.resolve(__dirname, '../src/content'),
      'posts': path.resolve(__dirname, '../src/content/blog/posts'),
      'static': path.resolve(__dirname, '../src/static'),
      'scripts': path.resolve(__dirname, '../src/scripts')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader', //js & vue linting
        exclude: [path.resolve(__dirname, '../node_modules')],
        enforce: 'pre',
        options: {
          fix: true,
          configFile: './build/.eslintrc.js'
        },
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', //transpile to plain ES5 JS
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [path.resolve(__dirname, '../node_modules')],
        options: {
          presets: ["@babel/preset-env"]  //Preset used for env setup
         }
      },
      {
        test: /.vue$/,
        loader: 'vue-loader', // use vue-loader for all *.vue files
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Scss to CSS
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'imgs/'
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          },
          {
            loader: 'markdown-loader',
            options: {
              xhtml: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: []
  }
}
