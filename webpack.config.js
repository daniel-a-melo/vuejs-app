/* global __dirname */
var path = require('path');

var webpack = require('webpack');
var srcDir = path.resolve(__dirname, 'src');
var outputDir = path.resolve(__dirname, 'app');
//var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: outputDir
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: srcDir,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      { test: /\.html$/, loader: 'raw-loader' }      
    ]
  },
  plugins: [
    // Simply copies the files over
    // new CopyWebpackPlugin([
    //     { from: dir_html } // to: output.path
    // ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map'
};
