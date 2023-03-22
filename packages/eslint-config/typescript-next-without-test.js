const airbnbUnicornTypescriptWithNextExtends = require('./extends/airbnb-unicorn-typescript-next');
const baseConfig = require('./typescript-base');

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  ...baseConfig,
  extends: airbnbUnicornTypescriptWithNextExtends,
};
