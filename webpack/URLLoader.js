module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "img/[name].[hash].[ext]"
              }
            }
          ]
        },
        {
          test: /\.(woff2|ttf|eot)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "fonts/[name].[ext]"
              }
            }
          ]
        }
      ]
    }
  }
};