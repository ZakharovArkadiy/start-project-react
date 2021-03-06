const webpack = require("webpack");

module.exports = () => {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true,
          drop_console: true,
        }
      })
    ]
  }
};