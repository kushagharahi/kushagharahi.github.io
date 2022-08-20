module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-v-html": 0
  }
}