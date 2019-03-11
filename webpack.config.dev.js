/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
});
