const { prettierCheckWrite } = require('./commands/prettier');
const { eslintFix } = require('./commands/eslint');

module.exports = {
  '*.{ts,tsx}': (files) => [`${eslintFix} ${files.join(' ')}`, `${prettierCheckWrite} ${files.join(' ')}`],
  '*.js': [prettierCheckWrite],
  '*.yml': [prettierCheckWrite],
};
