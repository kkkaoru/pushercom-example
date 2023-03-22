const react = require('@vitejs/plugin-react-swc');
const { c0, c1, c2 } = require('./coverage');

// https://vitejs.dev/config/
/** @type import('vitest/config').UserConfigExport */
module.exports = {
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'c8',
      statements: c0,
      branches: c1,
      functions: c2,
      lines: c2,
      thresholdAutoUpdate: true,
    },
    clearMocks: true,
  },
};
