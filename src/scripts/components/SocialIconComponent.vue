<template>
  <a v-if="name" :href="link"
     target="_blank"
     rel="noopener">
    <img :src="imgLink"
         v-on:mouseover="setHover(true)"
         v-on:mouseleave="setHover(false)"
         class="socialIcon" /></a>
</template>

<script>
var imgLinkPrefix = require.context('res/img/social/', false, /\.png$/)
export default {
  props: [
    'name', 'link'
  ],
  data: () => {
    return {
      imgLink: imgLinkPrefix('./' + this.name + '.png'),
      setHover: (hover) => {
        if (hover === true) {
          this.imgLink = imgLinkPrefix('./' + this.name + '-hover.png')
        } else {
          this.imgLink = imgLinkPrefix('./' + this.name + '.png')
        }
      }
    }
  }
}
</script>

<style lang="sass">

</style>
