import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts/'
import users from './modules/users/'
import signin from './modules/firebase/signin'
import ingredients from './modules/ingredients/'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      posts,
      users,
      ingredients,
      signin
    }
  })
  


export default store