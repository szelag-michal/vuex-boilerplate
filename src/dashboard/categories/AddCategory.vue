<template>
  <div>
    <form @submit.prevent="onAddCategory()">
      <input type="text" v-model="category" placeholder="Enter Category Name">
      <div><button>add</button></div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: ''
    }
  },
  computed: {
    formIsValid () {
      return this.category !== ''
    }
  },
  methods: {
    onAddCategory () {
      if (!this.formIsValid) return
      const categoryData = {
        category: this.category,
      }
      this.$store.dispatch('addCategory', categoryData)
      this.$router.push('/dashboard')
    }
  }
}
</script>