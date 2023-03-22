const { prettierCheckWrite } = require('./commands/prettier');
const { eslintFix } = require('./commands/eslint');
const { vitest } = require('./commands/vitest');

module.exports = {
  '*.{ts,tsx}': [eslintFix, prettierCheckWrite, vitest],
  '*.js': [prettierCheckWrite],
  '*.yml': [prettierCheckWrite],
};
