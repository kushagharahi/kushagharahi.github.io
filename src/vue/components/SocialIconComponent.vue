<template>
  <a :href="link" target="_blank" rel="noopener" :aria-label="name">
    <img
      :src="imgLink"
      class="socialIcon"
      :alt="name"
      @mouseover="setHover(true)"
      @mouseleave="setHover(false)"
  /></a>
</template>

<script>
let socialIconMap = require.context('res/img/social/', false, /\.png$/)
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      imgLink: '',
    }
  },
  created: function () {
    this.setHover(false)
  },
  methods: {
    setHover(hover) {
      if (hover === true) {
        this.imgLink = socialIconMap('./' + this.name + '-hover.png')
      } else {
        this.imgLink = socialIconMap('./' + this.name + '.png')
      }
    },
  },
}
</script>

<style lang="scss"></style>
