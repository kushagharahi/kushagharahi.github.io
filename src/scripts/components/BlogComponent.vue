<template>
    <div>
      <h1>Blog</h1>
      <div v-for="post in posts">
        <h2>
          <router-link :to="'/blog/post?name=' + post.name + '&title='+ post.title">{{post.title}}</router-link>
        </h2>
        <p>{{post.subtitle}}</p>
        <p>Date Posted: {{post.date_posted}} </p>
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
