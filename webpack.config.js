var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ['whatwg-fetch', './js/root.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'],
            plugins: ['react-html-attrs']
          }
        }
      },
      //下面使用ant-design 的配置文件
       {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/src/",
    filename: 'bundle.js'
  },
  devServer: {
    proxy: [
      {
        context: '/toutiao/*',
        target: 'http://v.juhe.cn',
        secure: false
      }
    ]
   }
};
