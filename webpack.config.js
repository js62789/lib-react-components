const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  devtool: 'source-map',

  entry: {
    client: './src'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' })
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  ],

};

module.exports = config;
