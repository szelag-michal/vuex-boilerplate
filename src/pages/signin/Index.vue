<template>
  <div>
      <div v-if="error">
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </div>
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
      },
      error () {
        return this.$store.getters.error
        },
    loading () {
        return this.$store.getters.loading
    }
  },
  watch: {
      user (value) {
          if(value !== null && value !== undefined) {
              this.$router.push('/dashboard')
          }
      }
  },
  created() {
    this.onDismissed()
  },
  methods: {
      onDismissed () {
        return this.$store.dispatch('clearError')
        },
      onSignIn () {
          return this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
  }
}
// https://github.com/academind/yt-devmeetup-vue-firebase/blob/13-auth-state-feedback/src/components/User/Signin.vue
// https://www.youtube.com/watch?v=fuhhQFt5Ybk

</script>



