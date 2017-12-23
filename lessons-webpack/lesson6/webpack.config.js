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
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'autoprefixer', 'sass']
      },
      {
        test: /\.css/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 1000000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
