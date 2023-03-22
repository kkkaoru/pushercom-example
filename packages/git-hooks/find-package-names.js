const { execSync } = require('child_process');

const atMarkPrefix = process.env.PACKAGE_AT_MARK_PREFIX || '@kkkaoru';

/**
 * @param {string} packageName
 * @returns {string}
 */
function removeAtMarkPrefix(packageName) {
  return packageName.replace(`${atMarkPrefix}/`, '');
}

/**
 * @returns {string[]} package names
 */
module.exports = () => {
  const pnpmListResult = JSON.parse(execSync('pnpm list --recursive --depth -1 --json').toString('utf8'));
  const packageNames = pnpmListResult
    .filter((packages) => packages.name.includes(atMarkPrefix))
    .map((ownPackage) => removeAtMarkPrefix(ownPackage.name));
  return packageNames;
};
