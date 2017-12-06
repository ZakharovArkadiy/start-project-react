const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = () => {
  return {
    plugins: [
      new CleanWebpackPlugin(
        ["public/js", "public/css"]
      )
    ]
  }
};