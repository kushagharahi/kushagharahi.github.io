<template>
  <div>
    <div v-for="post in posts" :key="post.name">
      <div class="postList shadow hover">
        <h2>
          <router-link class="postTitle" :to="'/blog/' + post.name">
            {{ post.title }}
          </router-link>
        </h2>
        <span class="postDate">{{ post.date_posted }} </span>
        <p>{{ post.subtitle }}</p>
        <p>
          <router-link :to="'/blog/' + post.name"> Full post >> </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import posts from 'content/blog/posts.json'

export default {
  data: () => {
    return {
      posts,
    }
  },
}
</script>

<style lang="scss">
.postList {
  margin: 0.5em;
  padding: 1em;
}

.postDate {
  display: block;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  color: #9a9a9a;
}
</style>
