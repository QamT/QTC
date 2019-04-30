const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        config.grep ? config.grep : 'src/tests/**/*.test.js',
      ],
    }),
  );
  return config;
}