const offUnicornRules = require('./off/off-unicorn');
const offNextRules = require('./off/off-next');
const offImportRules = require('./off/off-import');
const offReactRules = require('./off/off-react');
const offTypescriptRules = require('./off/off-typescript');

/** @type import('eslint').Linter.RulesRecord */
module.exports = {
  // Off rules
  ...offUnicornRules,
  ...offNextRules,
  ...offImportRules,
  ...offReactRules,
  ...offTypescriptRules,
};
