const typescriptBase = require('./typescript-base');

/** @type {string[]} */
module.exports = [
  ...typescriptBase,
  // 'prettier' needs to be bottom
  'prettier',
];
