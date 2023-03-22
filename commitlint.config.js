const { commitLint } = require('@kkkaoru/git-hooks');
const { findPackageNames } = require('@kkkaoru/git-hooks');

module.exports = {
  ...commitLint,
  rules: {
    'scope-enum': [
      2,
      'always',
      findPackageNames(),
    ],
  },
};
