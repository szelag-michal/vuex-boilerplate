import Vue from 'vue'
import Vuex from 'vuex'

import signin from './modules/firebase/signin'
import alert from './modules/global/alert'

import posts from './modules/posts/'
import addPost from './modules/posts/addPost'

import categories from './modules/categories'
import addCategory from './modules/categories/addCategory'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      signin,
      alert,
      posts,
      addPost,
      categories,
      addCategory
    }
  })
  


export default store