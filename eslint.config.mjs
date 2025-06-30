import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      prettier: prettierPlugin
    },
    extends: [
      js.configs.recommended, // recommended JS rules
      "plugin:prettier/recommended" // enables eslint-plugin-prettier + config
    ],
    rules: {
      "prettier/prettier": "error" // show Prettier formatting issues as ESLint errors
    },
    languageOptions: {
      globals: globals.browser, // enables browser-specific globals like `window`
      sourceType: "script" // since you're not using ES modules
    }
  }
]);
