import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/pages/home/'
import Posts from '@/pages/Posts/'
import Post from '@/pages/Posts/Post.vue'
import Users from '@/pages/Users/'
import Ingredients from '@/pages/ingredients/'

import SignIn from '@/pages/signin/'
import Dashboard from '@/pages/dashboard'
import AddPost from '@/pages/dashboard/AddPost.vue'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/posts',name: 'Posts',component: Posts},
    {path: '/posts/:id',name: 'Post',component: Post},
    {path: '/users',name: 'Users',component: Users},
    {path: '/ingredients',name: 'Ingredients',component: Ingredients},
    {path: '/signin', name: 'singin',component: SignIn},
    {path: '/dashboard', name: 'dashboard', component: Dashboard,beforeEnter: AuthGuard},
    {path: '/dashboard/add-post', name: 'AddPost', component: AddPost,beforeEnter: AuthGuard}
  ],
  mode: 'history'
})
