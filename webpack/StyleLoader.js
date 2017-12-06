const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (paths) => {
  return {
    module:{
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: "../",
            fallback: "style-loader",
            use: [
              {loader: "css-loader", options: {sourceMap: true}},
              {loader: "sass-loader", options: {sourceMap: true}}
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./css/[name].[contenthash].css")
    ]
  };
};