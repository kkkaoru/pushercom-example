const baseConfig = require('./typescript-base');
const withVitestExtends = require('./extends/with-vitest');
const withVitestEnv = require('./env/with-vitest');

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  ...baseConfig,
  extends: withVitestExtends,
  env: withVitestEnv,
};
