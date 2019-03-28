const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

// devmode used to inline css in dev [hmr purposes] and uses cssextractplugin in prod
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'JS Starter',
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules:
      [
        {
          test: /\.css$/,
          use:
            [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader',
            ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
  },
};
