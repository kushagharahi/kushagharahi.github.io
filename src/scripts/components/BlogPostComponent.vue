<template>
    <div>
        <h2>{{postMetadata.title}}</h2>
        <p>{{postMetadata.subtitle}}</p>
        <aside>Date Posted: {{postMetadata.date_posted}} </aside>
        <aside>Author: {{postMetadata.author}}</aside>
        <div v-html="compiledMarkdown"></div>
        <a target="_blank" rel="noopener" :href="'https://github.com/kushagharahi/kushagharahi.github.io/blob/dev/src/models/blog/posts/' + $route.params.name + '.md'">Suggest a change to this post here! (requires a GitHub account)</a>
    </div>
</template>

<script>
import marked from 'marked'
import postsJson from 'models/blog/posts.json'
var mdPrefix = require.context('models/blog/posts/', false, /\.md$/)
export default {
  data: () => {
    return {
      compiledMarkdown: '',
      postMetadata: {}
    }
  },
  created: function () {
    var rawMarkdown = mdPrefix('./' + this.$route.params.name + '.md')
    this.compiledMarkdown = marked(rawMarkdown, { sanitize: true })
    postsJson.forEach(p => {
      if (p.name === this.$route.params.name) {
        this.postMetadata = p
        this.setMetaTags(p.title, p.subtitle, '')
      }
    })
  }
}
</script>

<style lang="sass">
</style>
