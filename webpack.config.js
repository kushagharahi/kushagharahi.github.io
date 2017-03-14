module.exports = {
  // This is the "main" file which should include all other modules
  entry: './scripts/main.js',
  // Where should the compiled file go?
  output: {
    // To the `scripts` folder
    path: './scripts',
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
        exclude: /node_modules/
      },
       {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel',
      scss: 'style!css!sass'

    }
  }
}