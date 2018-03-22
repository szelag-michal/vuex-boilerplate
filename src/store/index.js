import Vue from 'vue'
import Vuex from 'vuex'

import signin from './modules/firebase/signin'
import alert from './modules/global/alert'

import pages from './modules/pages/'
import addPage from './modules/pages/addPage'

import posts from './modules/posts/'
import addPost from './modules/posts/addPost'

import portfolio from './modules/portfolio/'
import addPortfolio from './modules/portfolio/addPortfolio'


import categories from './modules/categories'
import addCategory from './modules/categories/addCategory'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      signin,
      alert,
      posts,
      pages,
      addPage,
      addPost,
      portfolio,
      addPortfolio,
      categories,
      addCategory
    }
  })
  


export default store