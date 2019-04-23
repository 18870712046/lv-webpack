const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { ProgressPlugin } = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test:/\.js$/,use:'babel-loader'}
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './public'), to: path.resolve(__dirname, './dist') },
    ]),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),

    new CleanWebpackPlugin(),

    new ProgressPlugin()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}
