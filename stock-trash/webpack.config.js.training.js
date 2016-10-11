module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 7777
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel'
    }]
  }
};