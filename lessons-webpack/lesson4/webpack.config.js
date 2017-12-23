module.exports = {
  entry: "./src/main",
  output: {
    path: __dirname + "/dist",
    filename: "./bundle/[name].[hash].js"
  }
}
