/** @type import('eslint').Linter.ConfigOverride */
module.exports = {
  files: ['**/*.stories.tsx'],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-lines': 'off',
    'max-depth': 'off',
    'max-lines-per-function': 'off',
  },
};
