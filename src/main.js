/* To run this gist, make an app using the vue-cli and webpack-simple template.
 * vue init webpack-simple some-app
 * also you will need to `yarn add axios vuex lodash --save`
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
	store,
  render: h => h(App)
})