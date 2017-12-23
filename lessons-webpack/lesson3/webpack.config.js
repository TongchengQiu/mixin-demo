module.exports = {
  entry: {
    file1: './src/main1.js',
    file2: './src/main2.js'
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[name].js"
  }
}
