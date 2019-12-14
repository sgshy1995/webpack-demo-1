const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      // 是否启用删除有关冲突顺序的警告
      // Enable to remove warnings about conflicting order
      ignoreOrder: false, 
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      }
    ]
  }
}