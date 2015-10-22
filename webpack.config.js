var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
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
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg)/,
      loader: 'url-loader'
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
};
