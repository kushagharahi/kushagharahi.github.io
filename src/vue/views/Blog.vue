<template>
<div>
  <h1>Blog</h1>
  <blog-listing-component v-bind:number-of-listings="4">
  </blog-listing-component>
</div>
</template>

<script>
import BlogListingComponent from '../components/BlogListingComponent.vue'
export default {
  components: { BlogListingComponent }
}
</script>

<style lang="scss">

</style>
