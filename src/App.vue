<template>
  <div id="app">
    <router-view></router-view>
    <floating-nav></floating-nav>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
export default {
  components: {
    'app-header': AppHeader
  }
}
</script>
<style lang="sass">
  
</style>
