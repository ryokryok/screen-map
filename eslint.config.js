import { defineFlatConfig } from "eslint-define-config";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsLint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";

export default defineFlatConfig([
  {
    ignores: ["dist"],
  },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
      globals: { ...globals.browser },
    },
    plugins: {
      "@typescript-eslint": tsLint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintImport,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...tsLint.configs["recommended"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...eslintImport.configs["recommended"].rules,
      "import/order": [2, { alphabetize: { order: "asc" } }],
    },
  },
]);
