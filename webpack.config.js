const htmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    contentBase: "./public"
  }
}
