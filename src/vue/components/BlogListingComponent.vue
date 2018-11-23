<template>
    <div>
        <div id="center" v-for="post in posts" v-bind:key="post.name">
            <div class="post shadow hover">
                <h2><router-link class="postTitle" :to="'/blog/' + post.name">{{post.title}}</router-link></h2>
                <span class="postDate">{{post.date_posted}} </span>
                <p>{{post.subtitle}}</p>
                <p><router-link :to="'/blog/' + post.name">Full post >></router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import posts from 'models/blog/posts.json'

export default {
props: {
    numberOfListings: Number
},
  data: () => {
    return {
        posts
      }
    }
  }
</script>

<style lang="scss">
.post {
  margin: 2em;
  padding: 2em;
  min-width:100%;
}

.postDate {
    display: block;
    margin-top: -.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
}
</style>
