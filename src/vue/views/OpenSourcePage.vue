<template>
  <div class="post">
    <div v-html="compiledMarkdown" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      compiledMarkdown: '',
    }
  },
  created() {
    this.compiledMarkdown = require('content/open-source/open-source.md')
    this.setMetaImg(this.getFirstImage(this.compiledMarkdown))
  },
  methods: {
    getFirstImage: (html) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const firstImg = doc.getElementsByTagName('img')[0]
      return firstImg != null ? firstImg.attributes.src.nodeValue : null
    },
  },
}
</script>

<style lang="scss">
@import 'res/style/scss/app.scss';

.post {
  margin: 0.5em;
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
  padding: 0.2em;
  line-height: 1.6;
  background-color: black;
}

a {
  overflow-wrap: break-word;
}
</style>
