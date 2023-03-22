const { prettierCheckWrite } = require('./commands/prettier');
const { eslintFix } = require('./commands/eslint');

module.exports = {
  '*.{ts,tsx}': (files) => [
    `${eslintFix} ${files.join(' ')}`,
    `${prettierCheckWrite} ${files.join(' ')}`,
    `jest --passWithNoTests --findRelatedTests ${files.join(' ')} --collectCoverageFrom=${files.join(' ')}`,
  ],
  '*.js': [prettierCheckWrite],
  '*.yml': [prettierCheckWrite],
};
