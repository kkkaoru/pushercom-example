/** @type import('eslint').Linter.ConfigOverride */
module.exports = {
  files: ['vitest.config.ts'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'unicorn/prefer-module': 'off',
  },
};
