/** @type import('eslint').Linter.RulesRecord */
module.exports = {
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['draft'],
    },
  ],
};
