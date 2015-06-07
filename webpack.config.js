module.exports = {
  entry: './lib/index',
  output: {
    path: './dist',
    filename: 'request-full-screen.js',
    library: 'requestFullScreen',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  }
};
