<template>
 <div class="container">
   <div class="columns">
      <div class="column">
        <p class="bd-notification is-info">Content</p>
      </div>
      <div class="column">
        Second column
      </div>
</div>
 </div>
</template>
<script>
export default {
  name: 'portfolio',
  created() {
    this.$store.dispatch("fetchPortfolio")
    this.$store.dispatch("fetchCategories")
  },
  methods:{
    fetchPortfolio() {
      return this.$store.state.portfolio.portfolio
    },
    showCategoryName(e) { 
      let arr = this.$store.state.categories.categories
      const findCategory = arr.find(function(el) {
          return el.id === e
      });
      if(findCategory) return findCategory.category
    },
    fetchPortfolioItem(e) {
      console.log(e);
    }
  }
}
</script>
<style lang="scss" scoped>
img {max-width: 5em;height: auto;}
</style>
