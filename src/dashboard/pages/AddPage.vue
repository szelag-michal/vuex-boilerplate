<template>
  <div>
    <form @submit.prevent="onAddPage()">
      <input type="text" v-model="title" placeholder="title">
      <input type="text" v-model="slug" placeholder="slug">
    
      <img :src="imageUrl" alt="">  
      <button @click="onPickFile">upload image</button>
      <input type="file" placeholder="add page image" style="display: none;" ref="fileInput" accept="image/*" @change="onFilePicked"/>
    
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
      slug: '',
      content: '',
      image: null,
      imageUrl: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.slug !== '' && this.content !== ''
    },
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
    onAddPage () {
      if (!this.formIsValid) return
      const pageData = {
        title: this.title,
        slug: this.slug,
        image: this.image,
        excerpt: this.excerpt,
        content: this.content
      }
      this.$store.dispatch('addPage', pageData)
      this.$router.push('/pages')
    }
  }
}
</script>
<style lang="scss">
@import '../../../node_modules/vue-wysiwyg/dist/vueWysiwyg.css';
.editr--toolbar {display: flex;}
</style>
