<template>
  <div>
    <ul>
      <li v-for="user in fetchUsers()" :key="user.id" @click="fetchUser(user.id)">{{user.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'users',
  created() {
    this.$store.dispatch("fetchUsers")       
  },
  methods:{
    fetchUsers() {
      return this.$store.state.users.users
    },
    fetchUser(e) {
      console.log(e);
    }
  }
}
</script>