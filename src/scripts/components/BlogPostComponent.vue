<template>
    <div class="post">
        <h2>{{postMetadata.title}}</h2>
        <span class="postDate">{{postMetadata.date_posted}} </span>
        <div v-html="compiledMarkdown"></div>
        <a target="_blank" rel="noopener" :href="'https://github.com/kushagharahi/kushagharahi.github.io/blob/dev/src/models/blog/posts/' + $route.params.name + '.md'">Suggest a change to this post here! (requires a GitHub account)</a>
    </div>
</template>

<script>
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
    this.compiledMarkdown = mdPrefix('./' + this.$route.params.name + '.md')
    let parser = new DOMParser()
    let doc = parser.parseFromString(this.compiledMarkdown, "text/xml")
    let firstImg =doc.getElementsByTagName('img')[0]
    postsJson.forEach(p => {
      if (p.name === this.$route.params.name) {
        this.postMetadata = p
        if(firstImg != null)
          this.setMetaTags(p.title, p.subtitle, window.location.origin + "/" + firstImg.attributes.src.nodeValue)
        else
          this.setMetaTags(p.title, p.subtitle, '')
      }
    })
  }
}
</script>

<style lang="sass">
.postDate {
    display: block;
    margin-top: -.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
}
</style>
