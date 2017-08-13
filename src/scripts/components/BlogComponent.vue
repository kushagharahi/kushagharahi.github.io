<template>
<div>
  <h1>Blog</h1>
  <div v-for="post in posts">
    <div class="post">
      <h2>
        <router-link class="postTitle" :to="'/blog/' + post.name">{{post.title}}</router-link>
      </h2>
      <span class="postDate">{{post.date_posted}} </span>
      <p>{{post.subtitle}}</p>
      <p><router-link :to="'/blog/' + post.name">Full post >></router-link></p>
    </div>
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

.post {
  margin-bottom: 2em;
}

.postDate {
    display: block;
    margin-top: -.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
}
</style>
