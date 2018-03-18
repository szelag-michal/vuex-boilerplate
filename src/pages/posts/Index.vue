<template>
  <div>
    <ul>
      <li v-for="post in fetchPosts()" :key="post.id" @click="fetchPost(post.id)">
        <img :src="post.imageUrl" alt="">{{post.title}} <em ><strong>cat:</strong> - {{showCategoryName(post.categoryId)}}</em> <div v-html="post.content"></div></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'posts',
  created() {
    this.$store.dispatch("fetchPosts")
    this.$store.dispatch("fetchCategories")
  },
  methods:{
    fetchPosts() {
      return this.$store.state.posts.posts
    },
    showCategoryName(e) { 
      let arr = this.$store.state.categories.categories
      const findCategory = arr.find(function(el) {
          return el.id === e
      });
      if(findCategory) return findCategory.category
    },
    fetchPost(e) {
      console.log(e);
    }
  }
}
</script>
<style lang="scss" scoped>
img {max-width: 5em;height: auto;}
</style>
