<template>
    <div>
        <div v-html="compiledMarkdown"></div>
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
