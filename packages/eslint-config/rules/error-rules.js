const errorMaxLinesRules = require('./error/error-max-lines');
const errorNoParamReassignRule = require('./error/error-no-param-reassign');
const errorNoConsoleRule = require('./error/error-no-console');
const errorTypeScriptRules = require('./error/error-typescript');

/** @type import('eslint').Linter.RulesRecord */
module.exports = {
  // Additional errors
  ...errorMaxLinesRules,
  ...errorNoParamReassignRule,
  ...errorNoConsoleRule,
  ...errorTypeScriptRules,
};
