<template>
  <div id="app">
    <app-header></app-header>
		<router-view></router-view>
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
<style>

</style>
