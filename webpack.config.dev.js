const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const baseConfig = require('./webpack.config.base');
const config = merge(baseConfig,{
  plugins:[
    new DefinePlugin({
      'process.env':{
        NODE_ENV:'"development"',
        BASE_URL:'"/"'
      }
    })
  ],
  mode:'development',
  devServer:{
    contentBase:'./dist',
    port:3000,
    open:true,
  }
})
module.exports = config;


// const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const { ProgressPlugin,DefinePlugin } = require('webpack')


// module.exports = {
//   entry: {
//     app:'./src/main.js'
//   },

//   output:{
//     path:path.resolve(__dirname,'./dist'),
//     filename:'[name].[hash].js'
//   },
//   module:{
//     rules:[
//       { test:/\.less$/,use:['style-loader','css-loader','less-loader'] }
//     ]
//   },
//   plugins:[
//     new CopyWebpackPlugin([
//       {from:path.resolve(__dirname,'./public'),to:path.resolve(__dirname,'./dist')},
//     ]),
//     new HtmlWebpackPlugin({
//       template:path.resolve(__dirname,'./public/index.html')
//     }),
//     new CleanWebpackPlugin(),
//     new ProgressPlugin(),
//     new DefinePlugin({
//       'process.env':{
//         NODE_ENV:'"development"',
//         BASE_URL:'"/"'
//       }
//     }),
//   ],
//   mode:'development',

//   devServer:{
//     contentBase:'./dist',
//     port:3000,
//     open:true,
//   }
// }
