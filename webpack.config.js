// WEBPACK CONFIG FILE
"use strict";

const webpack            = require('webpack');
const merge              = require('webpack-merge');
const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  source: path.join(__dirname, 'source'),
  public: path.join(__dirname, 'public')
};

// Basic settings webpack
const CONFIG = (env) => {

  const NODE_ENV = (env.production) ? "production" : "development";

  return {
    entry: {
      index: PATHS.source + '/index.js'
    },
    output: {
      path: PATHS.public,
      filename: '[name].[chunkhash].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new CleanWebpackPlugin(
        ["public"]
      )
    ]
  };

}; // end of basic settings webpack

module.exports = CONFIG;