import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import register from '@/views/register'
import login from '@/views/login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/register',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // 子路由
    children: [
      { path: 'register', component: register },
      { path: 'login', component: login },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
