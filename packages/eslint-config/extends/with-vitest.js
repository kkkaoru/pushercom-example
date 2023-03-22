const typescriptBase = require('./typescript-base');

/** @type {string[]} */
module.exports = [...typescriptBase, 'plugin:vitest/all', 'plugin:vitest-globals/recommended', 'prettier'];
