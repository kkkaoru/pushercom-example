const typescriptBase = require('./typescript-base');

/** @type {string[]} */
module.exports = [...typescriptBase, 'plugin:@next/next/recommended', 'plugin:jest/recommended', 'prettier'];
