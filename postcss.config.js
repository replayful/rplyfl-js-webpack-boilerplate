/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef


module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-inherit': {},
    'postcss-color-palette': {},
    'postcss-inline-svg': {},
    'postcss-easing-gradients': {},
    'postcss-typescale': {},
    'postcss-responsive-type': {},
    'postcss-utilities': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true,
        'color-mod-function': true,
        'custom-properties': {
          preserve: false,
          importFrom: 'src/css/vars.css',
        },
        'custom-selectors': {
          preserve: false,
        },
        'custom-media-queries': true,
      },
    },
    'postcss-pxtorem': {},
    'postcss-calc': {},
    'postcss-round-subpixels': {},
    cssnano: {
      calc: { precision: 2 },
    },
  },
};
