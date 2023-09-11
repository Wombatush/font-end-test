module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        jsx: true,
        useJSXTextNode: true
    },
    ignorePatterns: ["vite.config.ts"],
    env: {
        es6: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        'plugin:import/typescript',
        "plugin:jsx-a11y/recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "eslint-config-prettier",
        "airbnb-typescript",
        "airbnb/hooks"
    ],
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use.
            version: "detect",
        },
        // Tells eslint how to resolve imports
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
            typescript: {
                // this loads ./tsconfig.json to eslint
            }
        }
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                // Allow using underscores (_, __ etc)
                "argsIgnorePattern": "^_*$",
                "varsIgnorePattern": "^_*$",
                "caughtErrorsIgnorePattern": "^_*$"
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: ["variable"],
                format: ["strictCamelCase", "PascalCase", "UPPER_CASE"],
                filter: {
                    regex: "(^_*$|[I][D])",
                    match: false
                }
            },
        ],
        "quotes": ["error", "double", { "avoidEscape": true }],
        "jsx-quotes": ["error", "prefer-double"],
        "object-curly-spacing": ["error", "always"],
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/quotes": ["error", "double", { "avoidEscape": true }],
        "import/no-named-as-default": "off"
    }
};
