// WEBPACK CONFIG FILE
"use strict";

const webpack            = require('webpack');
const merge              = require('webpack-merge');
const path               = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')

const PugToHtml          = require('./webpack/PugToHtml');

const PATHS = {
  source: path.join(__dirname, 'source'),
  public: path.join(__dirname, 'public')
};

// Basic settings webpack
const CONFIG = env => {

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
      ),
      new HtmlWebpackPlugin({
        template: PATHS.source + '/views/index.pug'
      })
    ]
  };

}; // end of basic settings webpack

module.exports = (env) => {
  if (env.production) {
    return merge(
      CONFIG(env),
      PugToHtml()
    );
  } else {
    return merge(
      CONFIG(env),
      PugToHtml()
    );
  }
};