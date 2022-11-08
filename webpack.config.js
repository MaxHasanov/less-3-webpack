const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'main.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "src/main.js",
    // filename: 'main.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|webp|git|svg|gif)$/i,
        use: [
          {
            loader: 'img-optimize-loader',
            options: {
              compress: {
                mode: 'high',
                disableOnDevelopment: true,
              }
            }
          }
        ]
      },
      {
        test: /\.mp3$/i,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.mp4$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    })
  ]
}