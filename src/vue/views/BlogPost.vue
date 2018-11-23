<template>
    <div class="post">
        <h2>{{postMetaData.title}}</h2>
        <span class="postDate">{{postMetaData.date_posted}} </span>
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
      postMetaData: {}
      }
  },
  methods: {
      getFirstImage: (htmlString) => {
        const markdown = htmlString
        const parser = new DOMParser()
        const doc = parser.parseFromString(markdown, 'text/html')
        const firstImg = doc.getElementsByTagName('img')[0]
        return firstImg != null ? firstImg.attributes.src.nodeValue : null
      }
    },
    created() {
      this.compiledMarkdown = mdPrefix('./' + this.$route.params.name + '.md')
      this.postMetaData = postsJson.filter(p => p.name == this.$route.params.name)[0]
      this.setMetaImg(this.getFirstImage(this.compiledMarkdown))
      this.setMetaTags(this.postMetaData.title, this.postMetaData.subtitle)
    }
  }

</script>

<style lang="scss">
.postDate {
    display: block;
    margin-top: -.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
}

.post {
  margin: .5em;
  padding: 1em;
}

.post img {
  max-width: 100%; 
}
</style>
