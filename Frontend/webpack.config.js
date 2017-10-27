var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html')
  })],
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/normalize.css")
        ],
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpg/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        loader: 'url-loader'
      }
    ]
  },
}
