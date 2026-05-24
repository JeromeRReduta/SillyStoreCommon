import js from "@eslint/js";
import { defineConfig } from "eslint/config"; // ignored because: this is the eslint/config from node_modules
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: {
            js,
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
    },

    tseslint.configs.recommended,
]);
