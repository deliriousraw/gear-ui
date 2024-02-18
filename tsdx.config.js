const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true, // Enable CSS modules
        extensions: ['.scss'],
        use: [
          ['sass', {
            includePaths: [
              './src/styles', // global styles,
              './node_modules'
            ]
          }]
        ],
        inject: true, // Inject CSS into the JS bundle
        extract: !!options.writeMeta, // Extract CSS into separate files
      })
    );

    return config;
  },
};
