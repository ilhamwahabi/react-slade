module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    path: `${__dirname}/build`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: [ 
          { loader: 'style-loader'}, 
          { loader: 'css-loader'} 
        ]
      }
    ]
  }
}