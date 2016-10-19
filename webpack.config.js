/* eslint-disable global-require, max-len, import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const serverEntry = 'server/index.js';

module.exports = {
  entry: path.join(__dirname, serverEntry),
  output: {
    path: path.join(__dirname, 'build'),
    filename: serverEntry,
  },
  module: {
    loaders: [
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader',
      // },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader'),
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  postcss() {
    return [];
  },
};
