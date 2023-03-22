/** @type import('eslint').Linter.ConfigOverride */
module.exports = {
  files: ['**/packages/**/*.tsx', '**/packages/**/*.ts'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
