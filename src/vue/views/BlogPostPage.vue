<template>
  <div class="post">
    <h2>
      {{ postMetaData.title }}
    </h2>
    <span
      v-if="postMetaData.last_updated"
      class="postDate"
    >Last Updated {{ postMetaData.last_updated }}</span>
    <span
      v-if="!postMetaData.last_updated"
      class="postDate"
    >{{ postMetaData.date_posted }} </span>
    <div v-html="compiledMarkdown" />
    <a
      target="_blank"
      rel="noopener"
      :href="'https://github.com/kushagharahi/kushagharahi.github.io/tree/rc/src/content/blog/posts/' + $route.params.name + '/post.md'"
    >Suggest a change to this post here! (requires a GitHub account)</a>
    
    <component
      :is="'script'"
      type="application/ld+json"
    >
      {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "{{ postMetaData.title }}",
      "datePublished": "{{ iso8601DateCreated }}",
      "image": ["{{ firstImage }}"],
      "dateModified": "{{ iso8601DateModified }}",
      "author": [{
      "@type": "Person",
      "name": "Kusha Gharahi",
      "url": "https://kusha.me"
      }]
      }
    </component>
  </div>
</template>

<script>
import postsJson from 'content/blog/posts.json'

export default {
  data: () => {
    return {
      compiledMarkdown: '',
      postMetaData: {},
      iso8601DateCreated: '',
      iso8601DateModified: '',
      firstImage: ''
      }
  },
  created() {
    this.compiledMarkdown = require('posts/' + this.$route.params.name + '/post.md')
    this.postMetaData = postsJson.filter(p => p.name == this.$route.params.name)[0]
    this.firstImage = this.getFirstImage(this.compiledMarkdown)
    this.setMetaImg(this.firstImage)
    this.setMetaTags(this.postMetaData.title, this.postMetaData.subtitle)
    this.iso8601DateCreated = new Date(this.postMetaData.date_posted.replace(/(th |rd |nd )/, ' ')).toISOString()
    this.iso8601DateModified = new Date((this.postMetaData.last_updated ? this.postMetaData.last_updated : this.postMetaData.date_posted).replace(/(th |rd |nd )/, ' ')).toISOString()
  },
  methods: {
    getFirstImage: (html) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const firstImg = doc.getElementsByTagName('img')[0]
      return firstImg != null ? firstImg.attributes.src.nodeValue : null
    }
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
