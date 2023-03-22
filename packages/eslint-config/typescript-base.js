const airbnbUnicornTypescript = require('./extends/airbnb-unicorn-typescript');
const env = require('./env/base');
const rules = require('./rules');
const parserOptions = require('./parser-options');
const overrides = require('./overrides');
const ignorePatterns = require('./ignore-patterns');

/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: airbnbUnicornTypescript,
  env,
  parserOptions,
  rules,
  overrides,
  ignorePatterns,
};
