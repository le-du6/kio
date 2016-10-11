module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 9010
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel'
    }]
  }
};
