const baseConfig = require('./typescript-base');
const withJestExtends = require('./extends/with-jest');
const withJestEnv = require('./env/with-jest');

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  ...baseConfig,
  extends: withJestExtends,
  env: withJestEnv,
};
