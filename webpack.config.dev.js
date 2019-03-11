/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');


module.exports = merge(baseConfig, {
  mode: 'development',
});
