var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      CSS: path.resolve(__dirname, 'lib/css/'),
      UI: path.resolve(__dirname, 'lib/js/ui')
    },
    modules: [
      path.resolve('./lib/js'),
      path.resolve('./lib/css'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-flow-strip-types']
        }
      },
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
};
