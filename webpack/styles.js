const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(paths) {
  return {
    module:{
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: "../",
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./css/[name].css")
    ]
  };
};