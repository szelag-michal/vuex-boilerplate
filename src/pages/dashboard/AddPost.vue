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
    <img :src="imageUrl" alt="">  
    <button @click="onPickFile">upload image</button>
    <input type="file" placeholder="add post image" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked"/>
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
      content: '',
      image: null,
      imageUrl: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.category !== '' && this.excerpt !== '' && this.content !== ''
    }
  },
  methods: {
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <= 0) {
        return alert("Please provide a proper image file")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onAddPost () {
      if (!this.formIsValid || !this.image) return
      const postData = {
        title: this.title,
        category: this.category,
        image: this.image,
        excerpt: this.excerpt,
        content: this.content
      }
      this.$store.dispatch('addPost', postData)
      this.$router.push('/posts')
    }
  }
}
</script>
