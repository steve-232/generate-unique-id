import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js, jest: pluginJest },
		extends: ["js/recommended"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...pluginJest.environments.globals.globals,
			},
		},
	},
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
]);
