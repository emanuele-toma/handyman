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
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
