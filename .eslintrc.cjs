//@ts-check

module.exports = {
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
