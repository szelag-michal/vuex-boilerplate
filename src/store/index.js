import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts/'
import users from './modules/users/'
import signin from './modules/firebase/signin'
import ingredients from './modules/ingredients/'
import alert from './modules/global/alert'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      alert,
      posts,
      users,
      ingredients,
      signin
    }
  })
  


export default store