<template>
    <div>
        <div v-html="compiledMarkdown"></div>
        <a target="_blank" rel="noopener" :href="'https://github.com/kushagharahi/kushagharahi.github.io/blob/dev/src/models/blog/posts/' + $route.query.name + '.md'">Suggest a change to this post here! (requires a GitHub account)</a>
    </div>
</template>

<script>
import marked from 'marked'
var mdPrefix = require.context('models/blog/posts/', false, /\.md$/)
export default {
  data: () => {
    return {
      compiledMarkdown: ''
    }
  },
  created: function () {
    var rawMarkdown = mdPrefix('./' + this.$route.query.name + '.md')
    this.$route.meta.title = this.$route.query.title
    this.compiledMarkdown = marked(rawMarkdown, { sanitize: true })
  }
}
</script>

<style lang="sass">

</style>
