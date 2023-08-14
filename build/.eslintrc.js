module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    // This should be last as it disables all other ESLint rules relating to code formatting.
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/no-v-html': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
  ignorePatterns: ['dist/*'],
  env: {
    node: true,
  },
}
