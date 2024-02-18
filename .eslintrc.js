const commonPlugins = ['import', 'react', 'json', 'markdown', 'jest'];
const commonExtends = ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'];

module.exports = {
  overrides: [
    {
      files: ['.eslintrc.js', 'scripts/**/*.js', '__mocks__/**/*.js', 'rollup.config.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        ...commonExtends,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [...commonPlugins, '@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': ['warn'],
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [...commonExtends],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [...commonPlugins],
  rules: {},
};
