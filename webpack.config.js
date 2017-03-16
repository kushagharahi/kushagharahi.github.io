var path = require("path");
// Hack for Ubuntu on Windows: interface enumeration fails with EINVAL, so return empty.
try {
  require('os').networkInterfaces();
} catch (e) {
  require('os').networkInterfaces = () => ({});
}
module.exports = {
  // This is the "main" file which should include all other modules
  entry: './scripts/main.js',
  // Where should the compiled file go?
  output: {
    // To the `scripts` folder
    path: './scripts',
    publicPath: 'scripts/',
    // With the filename `app.js` so it's dist/app.js
    filename: 'app.js'
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      // use vue-loader for all *.vue files
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },
       {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel',
      scss: 'style!css!sass'
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      'res': path.resolve(__dirname, './res')
    }
  }
}