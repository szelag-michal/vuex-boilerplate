<template>
  <div id="app">
    <nav class="navbar navbar-main is-fixed-right" :class="{active: isActive}">
      <div class="menu-container">
        <ul class="menu-list">
        <li><a v-on:click="isActive = !isActive"><img src="@/assets/img/burger.svg" alt="" v-if="!isActive"><img src="@/assets/img/close.svg" v-else alt=""></a></li>
        <li><a href="#"><img src="@/assets/img/github.svg" alt=""></a></li>
        <li><a href="#"><img src="@/assets/img/linkedin.svg" alt=""></a></li>
      </ul>
      <ul class="main-menu-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>
    </nav>
    <router-view></router-view>
    <floating-nav></floating-nav>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive
      console.log(this.isActive)
    }
  },
  components: {
    'app-header': AppHeader
  }
}
</script>
<style lang="sass">
  
</style>
