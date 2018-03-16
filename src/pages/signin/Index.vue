<template>
  <div>
    <form @submit.prevent="onSignIn()">
        <input type="email" name="email" v-model="email" placeholder="e-mail"/>
        <input type="password" name="email" v-model="password" placeholder="enter password"/>
        <button type="submit">Sign In</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
      return {
          email: '',
          password: ''
      }
  },
  computed: {
      user() {
          return this.$store.getters.user
      }
  },
  watch: {
      user (value) {
          if(value !== null && value !== undefined) {
              this.$router.push('/')
          }
      }
  },
  methods: {
      onSignIn () {
          this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
  }
}
</script>

