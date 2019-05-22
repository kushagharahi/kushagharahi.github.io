<template>
  <div class="post">
    <h2>{{postMetaData.title}}</h2>
    <span class="postDate">{{postMetaData.date_posted}} </span>
    <div v-html="compiledMarkdown"></div>
    <a target="_blank" rel="noopener" :href="'https://github.com/kushagharahi/kushagharahi.github.io/tree/rc/src/content/blog/posts/' + $route.params.name + '/post.md'">Suggest a change to this post here! (requires a GitHub account)</a>
  </div>
</template>

<script>
import postsJson from 'content/blog/posts.json'

export default {
  data: () => {
    return {
      compiledMarkdown: '',
      postMetaData: {}
      }
  },
  methods: {
    getFirstImage: (html) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const firstImg = doc.getElementsByTagName('img')[0]
      return firstImg != null ? firstImg.attributes.src.nodeValue : null
    }
  },
  created() {
    this.compiledMarkdown = require('posts/' + this.$route.params.name + '/post.md')
    this.postMetaData = postsJson.filter(p => p.name == this.$route.params.name)[0]
    this.setMetaImg(this.getFirstImage(this.compiledMarkdown))
    this.setMetaTags(this.postMetaData.title, this.postMetaData.subtitle)
  }
}

</script>

<style lang="scss">
  @import 'res/style/scss/app.scss';
  
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

  pre {
    @extend %shadow-shared;
    
    background-color: black;
    padding: 1em;
    overflow-x: auto;

    & code {
      overflow-wrap: normal;
      white-space: pre;
    }
}

  code {
    font-size: 1.2em;
    padding: .2em;
    line-height: 1.6;
    background-color: black;
  }
  
  a {
    overflow-wrap: break-word;
  }
</style>
