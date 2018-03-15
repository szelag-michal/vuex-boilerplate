import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts/'
import users from './modules/users/'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      posts,
      users
    }
  })
  


export default store