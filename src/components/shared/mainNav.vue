<template>
<nav class="navbar navbar-main is-fixed-right" :class="{active: isActive}">
      <div class="menu-container">
        <ul class="menu-list">
        <li><a v-on:click="isActive = !isActive">
              <svg-icon name="burger" :size="32" v-if="!isActive"/>
              <svg-icon name="close" :size="32" v-else/>
            </a></li>
        <li><a href="#"><svg-icon name="github" :size="32"></svg-icon></a></li>
        <li><a href="#"><svg-icon name="linkedin" :size="32"></svg-icon></a></li>
      </ul>
      <ul class="main-menu-list">
        <li><router-link to="/">Home</router-link>  </li>
        <li><router-link to="/about-me">About Me</router-link>  </li>
        <li><router-link to="/portfolio">Portfolio</router-link>  </li>
        <li><router-link to="/contact">Contact</router-link>  </li>
      </ul>
      </div>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    menuItems () {
        let menuItems = [
          
          {title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {title: 'D', link: '/dashboard',position: '1'},
            {title: 'P', link: '/dashboard/posts/',position: '2'},
            {title: 'C', link: '/dashboard/categories/',position: '3'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive
      console.log(this.isActive)
    },
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
