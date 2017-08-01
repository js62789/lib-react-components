module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-modules': {
      getJSON: ctx.extractModules || (() => {}),
    }
  },
});
