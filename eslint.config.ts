import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

// eslint-disable-next-line import-x/extensions
import { defineConfig } from "eslint/config"; // ignored because: this is the eslint/config from node_modules
import { importX } from "eslint-plugin-import-x";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: {
            js,
            "import-x": importX,
        },
        extends: ["js/recommended"],

        languageOptions: {
            globals: globals.node,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                allowDefaultProject: ["eslint.config.ts"],
            },
        },
        rules: {
            "import-x/no-dynamic-require": "error",
            "import-x/no-nodejs-modules": "error",
            "import-x/extensions": ["error", "always"],
        },
    },

    tseslint.configs.recommended,
]);
