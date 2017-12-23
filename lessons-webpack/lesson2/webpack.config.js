module.exports = {
  entry: [
    './src/main1.js',
    './src/main2.js'
  ],
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  }
}
