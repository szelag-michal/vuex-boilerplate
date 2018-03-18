<template>
  
    <div class="navbar">
      <router-link to="/">home</router-link>
      <router-link to="posts">posts</router-link>
      <router-link to="users">users</router-link>
      
      |
      <router-link 
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
              {{item.title}}
      </router-link>
      <a @click.prevent="onLogout" v-if="userIsAuthenticated">logout</a> 
    </div>
  
</template>

<script>
export default {
  computed: {
    menuItems () {
        let menuItems = [
          
          {title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {title: 'Dashboard', link: '/dashboard'},
            {title: 'Add Post', link: '/dashboard/add-post'},
            {title: 'Add Category', link: '/dashboard/add-category'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
