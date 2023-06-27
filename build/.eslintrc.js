module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  rules: {
    "vue/no-v-html": 0
  },
  ignorePatterns: ['dist/*', 'build/*'],
  env: {
    node: true
  }
}