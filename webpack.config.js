var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // context: __dirname,
  entry: [
    // 'webpack-hot-middleware/client',
    './app/main'
  ],
  output: {
    path: path.join(__dirname, '/app'),
    filename: 'index.js'
    // publicPath: '/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
};
