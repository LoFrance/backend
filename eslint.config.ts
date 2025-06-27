import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import globals from 'globals';


export default [
    eslint.configs.recommended,
    {
        languageOptions: {
        globals: {
            ...globals.browser,
        },
        },
    },
    {
        files: ["**/*.ts"],
        ignores: ["**/*.config.ts"],
        languageOptions: {
            parser: tsParser,
            globals: {
                process: "readonly",
                console: "readonly",
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            "prettier": prettier,
        },
        rules: {
            // Enforce consistent indentation (2 spaces in this case)
            "indent": ["error", 2],
            // Enforce the use of single quotes for strings
            "quotes": ["error", "single"],
            // Enforce semicolons at the end of statements
            "semi": ["error", "always"],
            // Enforce consistent line breaks (LF for Unix)
            "linebreak-style": ["error", "unix"],
            // Require the use of === and !== (no implicit type conversions)
            "eqeqeq": ["error", "always"],
            // Enforce a maximum line length (usually 80 or 100 characters)
            "max-len": ["error", { code: 100 }],
            // Enable Prettier as a lint rule
            "prettier/prettier": [
                "error",
                {
                    singleQuote: true,
                    semi: true,
                },
            ],
        },
    },
];
