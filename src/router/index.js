import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Home from '@/pages/home/'
import Pages from '@/pages/'
import Posts from '@/pages/Posts/'
import Post from '@/pages/Posts/Post.vue'
import Portfolio from '@/pages/Portfolio/'
import PortfolioDetails from '@/pages/Portfolio/PortfolioDetails.vue'
import Users from '@/pages/Users/'
import Ingredients from '@/pages/ingredients/'

import SignIn from '@/pages/signin/'

import Dashboard from '@/dashboard/'

import DashboardPosts from '@/dashboard/posts/'
import AddPost from '@/dashboard/posts/AddPost.vue'

import DashboardPortfolio from '@/dashboard/portfolio/'
import AddPortfolio from '@/dashboard/portfolio/AddPortfolio.vue'

import DashboardPages from '@/dashboard/pages/'
import AddPage from '@/dashboard/pages/AddPage.vue'

import DashboardCategories from '@/dashboard/categories/'
import AddCategory from '@/dashboard/categories/AddCategory.vue'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/about-me', name: 'Pages', component: Pages},
    {path: '/posts',name: 'Posts',component: Posts},
    {path: '/posts/:id',name: 'Post',component: Post},
    {path: '/portfolio',name: 'Portfolio',component: Portfolio},
    {path: '/ingredients',name: 'Ingredients',component: Ingredients},
    {path: '/signin', name: 'singin',component: SignIn},
    {path: '/dashboard', name: 'dashboard', component: Dashboard,beforeEnter: AuthGuard},

    {path: '/dashboard/pages/', name: 'DashboardPages', component: DashboardPages,beforeEnter: AuthGuard},
    {path: '/dashboard/pages/add', name: 'AddPage', component: AddPage,beforeEnter: AuthGuard},

    {path: '/dashboard/posts/', name: 'DashboardPosts', component: DashboardPosts,beforeEnter: AuthGuard},
    {path: '/dashboard/posts/add', name: 'AddPost', component: AddPost,beforeEnter: AuthGuard},

    {path: '/dashboard/portfolio/', name: 'DashboardPortfolio', component: DashboardPortfolio,beforeEnter: AuthGuard},
    {path: '/dashboard/portfolio/add', name: 'AddPortfolio', component: AddPortfolio,beforeEnter: AuthGuard},

    {path: '/dashboard/categories/', name: 'DashboardCategories', component: DashboardCategories,beforeEnter: AuthGuard},
    {path: '/dashboard/categories/edit', name: 'AddCategory', component: AddCategory,beforeEnter: AuthGuard}
  ],
  mode: 'history'
})
