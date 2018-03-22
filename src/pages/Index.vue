<template>
  <div v-if="fetchPages()">
    <h1>{{fetchPages()[0].title}}</h1>
      <div v-html="fetchPages()[0].content"></div>
    
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("fetchPages")
  },
  methods:{
    fetchPages() {
      return this.$store.state.pages.pages
    }
  }
}
</script>
<style lang="scss" scoped>
img {max-width: 5em;height: auto;}
</style>
