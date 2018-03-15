<template>
  <div id="app">
		<ul>
      <li v-for="post in fetchPosts()" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  created() {
    this.$store.dispatch("fetchPosts")       
  },
  methods:{
    fetchPosts() {
      console.log(this.$store.state.posts.posts)
    }
  }
}
</script>