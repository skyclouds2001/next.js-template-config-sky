module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:jsdoc/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'n/no-missing-import': 'off',
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
