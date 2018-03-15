<template>
  <div>
    <ul>
      <li v-for="post in fetchPosts()" :key="post.id" @click="fetchPost(post.id)">{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'posts',
  created() {
    this.$store.dispatch("fetchPosts")       
  },
  methods:{
    fetchPosts() {
      return this.$store.state.posts.posts
    },
    fetchPost(e) {
      console.log(e);
    }
  }
}
</script>