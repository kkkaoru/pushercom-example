const errorRules = require('./error-rules');
const offRules = require('./off-rules');

/** @type import('eslint').Linter.RulesRecord */
module.exports = {
  // Off rules
  ...offRules,
  // Additional errors
  ...errorRules,
};
