module.exports = {
  "env": {
      "browser": true,
      "es2020": true
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier',
  ],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "airbnb"],
  rules: {
    "prettier/prettier": "error"
  },
};
