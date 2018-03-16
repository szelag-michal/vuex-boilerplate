<template>
  <div>
    <ul>
      <li v-for="ingredient in fetchIngredients()" :key="ingredient.id" @click="fetchPost(ingredient.id)">{{ingredient.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ingredients',
  created() {
    this.$store.dispatch("fetchIngredients")       
  },
  methods:{
    fetchIngredients() {
      return this.$store.state.ingredients.ingredients
    },
    fetchPost(e) {
      console.log(e);
    }
  }
}
</script>