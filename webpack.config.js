/* eslint-disable global-require */
// eslint-disable-next-line global-require
// eslint-disable-next-line import/no-dynamic-require
module.exports = env => require(`./webpack.config.${env}.js`);
