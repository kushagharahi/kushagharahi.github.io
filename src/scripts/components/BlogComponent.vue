<template>
    <div>
      <div v-for="post in posts">
        <h2>{{post.title}}</h2>
        <router-link :to="'/blog/post?name=' + post.name">{{post.title}}</router-link>
      </div>
    </div>
</template>

<script>
import postsJson from 'models/blog/posts.json'
export default {
  data: () => {
    return {
      posts: postsJson
    }
  }
}
</script>

<style lang="sass">

</style>
