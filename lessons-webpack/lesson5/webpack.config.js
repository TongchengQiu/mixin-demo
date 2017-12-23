module.exports = {
  entry: "./src/main",
  output: {
    path: __dirname + "/dist",
    filename: "./bundle/[name].[hash].js",
    publicPath: "//qiutc.me/static/"
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10,
          name: '[name].[ext]'
        }
      }
    ]
  }
}
