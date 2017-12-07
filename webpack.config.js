// WEBPACK CONFIG FILE
"use strict";

const webpack            = require("webpack");
const merge              = require("webpack-merge");
const path               = require("path");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const PugToHtml          = require("./webpack/PugToHtml");
const UglifyJsPlugin     = require("./webpack/UglifyJsPlugin");
const StyleLoader        = require("./webpack/StyleLoader");
const URLLoader          = require("./webpack/URLLoader");
const JSONLoader         = require("./webpack/JSONLoader");

const PATHS = {
  source: path.join(__dirname, "source"),
  public: path.join(__dirname, "public")
};

// Basic settings webpack
const CONFIG = env => {

  const NODE_ENV   = env.production ? "production" : "development";
  const SOURCE_MAP = !env.production ? "inline-source-map" : false;

  return {
    entry: {
      index: PATHS.source + "/index.js"
    },
    output: {
      path: PATHS.public,
      filename: "./js/[name].[chunkhash].js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    devtool: SOURCE_MAP,
    plugins: [
      new CleanWebpackPlugin(
        ["public"]
      ),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new HtmlWebpackPlugin({
        template: PATHS.source + "/views/index.pug"
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 9000
    }
  };

}; // end of basic settings webpack

module.exports = env => {
  if (env.production) {
    return merge(
      CONFIG(env),
      UglifyJsPlugin(),
      PugToHtml(),
      StyleLoader(),
      URLLoader(),
      JSONLoader()
    );
  } else {
    return merge(
      CONFIG(env),
      PugToHtml(),
      StyleLoader(),
      URLLoader(),
      JSONLoader()
    );
  }
};