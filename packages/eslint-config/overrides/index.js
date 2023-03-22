const tsxOverrides = require('./tsx');
const storiesTsxOverrides = require('./stories-tsx');
const sliceTsOverrides = require('./slice-ts');
const testTsxTsOverrides = require('./test-ts-tsx');
const pageTsxOverrides = require('./page-tsx');
const vitestConfigTsOverrides = require('./vitest-config-ts');
const packagesTsOverrides = require('./package-ts-tsx');

/** @type import('eslint').Linter.ConfigOverride[] */
module.exports = [
  tsxOverrides,
  storiesTsxOverrides,
  testTsxTsOverrides,
  sliceTsOverrides,
  pageTsxOverrides,
  vitestConfigTsOverrides,
  packagesTsOverrides,
];
