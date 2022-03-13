const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
      '@customUtils': path.resolve(__dirname, 'src/utils'),
    },
  };
  return config;
};