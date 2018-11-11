<template>
    <div>
        <div id="center" v-for="post in splicedPosts" v-bind:key="post.name">
            <div class="post shadow hover">
                <h2><router-link class="postTitle" :to="'/blog/' + post.name">{{post.title}}</router-link></h2>
                <span class="postDate">{{post.date_posted}} </span>
                <p>{{post.subtitle}}</p>
                <p><router-link :to="'/blog/' + post.name+ '/'">Full post >></router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import postsJson from 'models/blog/posts.json'

export default {
props: {
    numberOfListings: Number
},
  data: () => {
    return {
        posts: postsJson
      }
    },
    computed: {
        splicedPosts: function() {
            let vm = this;
            return vm.posts.splice(0, vm.numberOfListings);
        }
    }
  }
</script>

<style lang="scss">
.post {
  margin: 2em;
  padding: 2em;
}

.postDate {
    display: block;
    margin-top: -.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
}
</style>
