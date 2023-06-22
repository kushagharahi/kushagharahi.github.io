const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, '../src') + '/vue/main.js',
  output: {
    filename: '[name]_bundle.js',
    chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
      'res': path.resolve(__dirname, '../src/res'),
      'content': path.resolve(__dirname, '../src/content'),
      'posts': path.resolve(__dirname, '../src/content/blog/posts'),
      'static': path.resolve(__dirname, '../src/static'),
      'scripts': path.resolve(__dirname, '../src/scripts')
    },
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
        test: /\.vue$/,
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
        test: /\.(eot|svg|woff|woff2|otf)$/,
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
        // Any file that has the query ?raw that is imported will get included in the build as a resource
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
      overrideConfigFile:  path.resolve(__dirname, '.eslintrc.js'),
      useEslintrc: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/static/index.html'),
      hash: true
    })
  ],
}