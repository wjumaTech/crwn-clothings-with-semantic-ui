module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [{
    "env": {
      "node": true,
      "es6": true,
      "browser": true
    },
    "files": [
      ".eslintrc.{js,cjs}"
    ],
    "parserOptions": {
      "sourceType": "script"
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error"],
    "no-unused-vars": [1, { "vars": "all", "varsIgnorePattern": "[iI]gnored" }], //after-used
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "react/jsx-no-target-blank": 0,
  }
}