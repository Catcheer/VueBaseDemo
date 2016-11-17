var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

// var ExtractTextPlugin = require('extract-text-webpack-plugin')
//var ExtractTextPlugin = require('extract-text-webpack-plugin');//提取单独css文件插件
//var HtmlWebpackPlugin = require('html-webpack-plugin');//生成新的html
//var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
      // 'vue'  : 'vue/dist/vue.min'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
          // name: 'images/[hash:16].[ext]?[name]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
      {test: /\.css$/, loader: "style-loader,css-loader"},
      // {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.less$/, loader: "style!css!less"}
     /* {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
        )
      }*/

    ]
  },
 /* plugins: [
    new ExtractTextPlugin('[name].css'),
  ],*/
  /*plugins: [
   new HtmlWebpackPlugin({
   template: 'index.html',
   inject: 'head',
   //chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main']),
   chunksSortMode: 'dependency'
   }),
   new CopyWebpackPlugin([{
   from: 'src/assets',
   to: 'assets'
   }]),
   new ExtractTextPlugin("static/css/main.css")
   ],*/
  devServer: {
    contentBase: "./src", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
