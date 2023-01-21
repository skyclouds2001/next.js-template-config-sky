module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:promise/recommended', 'plugin:n/recommended', 'plugin:jsdoc/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'n/no-missing-import': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      excludedFiles: ['**/__tests__/utils/**/*.[jt]s?(x)'],
    },
  ],
}
