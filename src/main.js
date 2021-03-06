/* To run this gist, make an app using the vue-cli and webpack-simple template.
 * vue init webpack-simple some-app
 * also you will need to `yarn add axios vuex lodash --save`
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as firebase from 'firebase'
import AlertComponent from './components/shared/Alert'

//Register Global Components
Vue.component('app-alert', AlertComponent)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCy115ATWCgwfQHB4uWXydG3fP1hPfOvuA',
      authDomain: 'lakomy-lasuch.firebaseapp.com',
      databaseURL: 'https://lakomy-lasuch.firebaseio.com',
      projectId: 'lakomy-lasuch',
      storageBucket: 'lakomy-lasuch.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})