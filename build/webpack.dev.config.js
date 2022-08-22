const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

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
      'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
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
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[hash][ext][query]'
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              esModule: false
            }
          },
          {
            loader: 'markdown-loader',
            options: {
              xhtml: true
            }
          }
        ]
      },
      {
        resourceQuery: /raw/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      extensions: [`js`, `jsx`, `vue`],
      cache: false,
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      fix: true,
      overrideConfigFile: './build/.eslintrc.js',
      useEslintrc: true,
    }),
    // Set default compile time feature flags to stop warning.
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ],
  optimization: {
    minimizer: []
  }
}