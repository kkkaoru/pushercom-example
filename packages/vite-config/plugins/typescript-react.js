const dts = require('vite-plugin-dts');
const react = require('@vitejs/plugin-react-swc');

/** @type import('vite').PluginOption[] */
module.exports = [react(), dts()];
