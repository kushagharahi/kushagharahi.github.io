<template>
    <div>
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked'
import blogPostMarkdown from 'models/blog/posts/hello_world.md'
export default {
  data: () => {
    return {
      rawMarkdown: blogPostMarkdown
    }
  },
  computed: {
    compiledMarkdown: () => {
      return marked(this.rawMarkdown, { sanitize: true })
    }
  }
}
</script>

<style lang="sass">

</style>
