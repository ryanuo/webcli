/*
 * @Author: Harry
 * @Date: 2022-04-20 20:40:43
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-04-20 21:00:06
 * @FilePath: \webcli\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/login'
  }
  // {
  //   path: '/home',
  //   component: Home,
  //   redirect: '/welcome',
  //   children: [
  //     { path: '/welcome', component: ()=>import('') },
  //   ]
  // }
]
const router = new VueRouter({
  routes
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()
  // const token = sessionStorage.getItem('token')
  // if (!token) return next('/login')
  // next()
})
export default router
