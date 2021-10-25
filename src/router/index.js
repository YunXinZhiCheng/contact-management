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
    component: Home,
    children: [
      { path: 'register', component: register },
      { path: 'login', component: login },
    ],
  },
  // {
  //   path: '/contacts',
  //   component: mailList,
  //   children: [
  //     {
  //       path: 'index',
  //       component: notes,
  //       meta: { logined: true },
  //     },
  //     { path: 'add', component: addCon },
  //     { path: 'own', component: own },
  //   ],
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
