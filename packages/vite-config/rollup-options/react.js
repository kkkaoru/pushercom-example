/** @type import('rollup').RollupOptions */
module.exports = {
  external: ['react', 'react-dom', 'next'],
  output: {
    globals: {
      react: 'React',
      next: 'Next',
      'react-dom': 'ReactDOM',
    },
  },
};
