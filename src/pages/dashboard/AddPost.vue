<template>
  <div>
    <form @submit.prevent="onAddPost()">
      <input type="text" v-model="title" placeholder="title">
    <select v-model="category">
      <option value="cat1">Category #1</option>
      <option value="cat2">Category #2</option>
      <option value="cat3">Category #3</option>
      <option value="cat4">Category #4</option>
    </select>
    <textarea v-model="excerpt" placeholder="excerpt"></textarea>
    <textarea v-model="content" placeholder="content"></textarea>
    <div><button>add</button></div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      category: '',
      excerpt: '',
      content: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.category !== '' && this.excerpt !== '' && this.content !== ''
    }
  },
  methods: {
    onAddPost () {
      if (!this.formIsValid) return
      const postData = {
        title: this.title,
        category: this.category,
        excerpt: this.excerpt,
        content: this.content
      }
      this.$store.dispatch('addPost', postData)
      this.$router.push('/posts')
    }
  }
}
</script>
