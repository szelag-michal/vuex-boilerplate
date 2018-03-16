import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts/'
import users from './modules/users/'
import signin from './modules/firebase/signin'
import ingredients from './modules/ingredients/'
import alert from './modules/global/alert'
import addPost from './modules/posts/addPost'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      alert,
      posts,
      users,
      ingredients,
      signin,
      addPost
    }
  })
  


export default store