const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const marked = require('marked')

// if links are not localhost, have them open in a new tab
const renderer = new marked.Renderer()
const linkRenderer = renderer.link
renderer.link = (href, title, text) => {
  const localLink = [
    `http//127.0.0.1`,
    `http//localhost`,
    `http//0.0.0.0`,
    `127.0.0.1`,
    `localhost`,
    `0.0.0.0`,
  ].some((localhost) => href.startsWith(localhost))
  const html = linkRenderer.call(renderer, href, title, text)
  return localLink
    ? html
    : html.replace(
        /^<a /,
        `<a target="_blank" rel="noreferrer noopener nofollow" `,
      )
}

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
    clean: true,
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
      res: path.resolve(__dirname, '../src/res'),
      content: path.resolve(__dirname, '../src/content'),
      posts: path.resolve(__dirname, '../src/content/blog/posts'),
      static: path.resolve(__dirname, '../src/static'),
      scripts: path.resolve(__dirname, '../src/scripts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', //transpile to plain ES5 JS
        include: [path.resolve(__dirname, '../src')],
        exclude: [path.resolve(__dirname, '../node_modules')],
        options: {
          presets: ['@babel/preset-env'], //Preset used for env setup
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader', // use vue-loader for all *.vue files
        exclude: [path.resolve(__dirname, '../node_modules')],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Scss to CSS
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              esModule: false,
            },
          },
          {
            loader: 'markdown-loader',
            options: {
              xhtml: true,
              renderer: renderer,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|woff|woff2|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[hash][ext][query]',
        },
      },
      {
        // Any file that has the query ?raw that is imported will get included in the build as a resource
        resourceQuery: /raw/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/static/index.html'),
      hash: true,
    }),
  ],
}
