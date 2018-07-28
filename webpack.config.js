var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: { path: path.resolve(__dirname, 'dist'), filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader','css-loader']
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new CopyWebpackPlugin(
      [{ from: path.resolve(__dirname, 'src', 'static'), to: path.resolve(__dirname, 'dist', 'static') }]
    , {})
  ]
}]
