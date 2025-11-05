import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { importX } from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { configs as sonarConfigs } from "eslint-plugin-sonarjs";
import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsconfigs } from "typescript-eslint";
import js from "@eslint/js";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ignores: ["src/middleware.ts", "src/app/**/route.ts"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    rules: {
      "no-console": "warn",
    },
  },
  { files: ["src/middleware.ts", "src/app/**/route.ts"], languageOptions: { globals: globals.node } },
  importX.flatConfigs.react,
  importX.flatConfigs.typescript,
  pluginUnicorn.configs.recommended,
  sonarConfigs.recommended,
  ...tsconfigs.recommended,
  eslintPluginPrettierRecommended,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
