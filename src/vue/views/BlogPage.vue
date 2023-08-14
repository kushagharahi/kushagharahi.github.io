<template>
  <div class="blog">
    <h1>Blog</h1>
    <blog-listing-component />
  </div>
</template>

<script>
import BlogListingComponent from '../components/BlogListingComponent.vue'
export default {
  components: { BlogListingComponent },
}
</script>

<style lang="scss">
.blog {
  margin: 0.5em;
  padding: 1em;
}
</style>
