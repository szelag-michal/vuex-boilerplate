<template>
  <div>
    <form @submit.prevent="onAddPost()">
      <input type="text" v-model="title" placeholder="title">
    <select v-model="categoryId" v-if="fetchCategories()">
      <option :value="category.id" v-for="category in fetchCategories()" :key="category.category">{{category.category}}</option>
    </select>
    <img :src="imageUrl" alt="">  
    <button @click="onPickFile">upload image</button>
    <input type="file" placeholder="add post image" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked"/>
    <textarea v-model="excerpt" placeholder="excerpt"></textarea>
    
    <wysiwyg v-model="content" />
    <div><button>add</button></div>
    </form>
  </div>
</template>
<script>
import Vue from 'vue'
import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {}); // config is optional. more below

export default {
  data() {
    return {
      title: '',
      categoryId: '',
      excerpt: '',
      content: '',
      image: null,
      imageUrl: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.categoryId !== '' && this.excerpt !== '' && this.content !== ''
    },
  },
  created () {
    this.$store.dispatch("fetchCategories")
  },
  methods: {
    fetchCategories () {
      return this.$store.state.categories.categories
    },
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
        categoryId: this.categoryId,
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
<style lang="scss">
@import '../../../../node_modules/vue-wysiwyg/dist/vueWysiwyg.css';
.editr--toolbar {display: flex;}
</style>
