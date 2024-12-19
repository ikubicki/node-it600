const globals = require("globals");
const pluginJs = require("@eslint/js");


/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];