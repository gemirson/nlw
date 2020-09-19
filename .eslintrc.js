module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/tsx-filename-extension": [
            "error",
            {
                "extensions": [".ts", ".tPsx"]
            }
        ],
        "global-require": "off",
        "import/prefer-default-export": "off",
        "no-unused-expressions": ["error", { "allowTaggedTemplates": true }]
    }
};
