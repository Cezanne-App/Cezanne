module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    radix: 0,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
};
