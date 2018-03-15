import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/pages/home/'
import Posts from '@/pages/Posts/'
import Post from '@/pages/Posts/Post.vue'
import Users from '@/pages/Users/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ],
  mode: 'history'
})
