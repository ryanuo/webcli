/*
 * @Author: Harry
 * @Date: 2021-12-26 15:16:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-04-21 10:30:38
 * @FilePath: \webcli\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// createWebHashHistory  // createWebHistory
const routes = [
  {
    path: '/',
    component: () => import('@/views/Tabbar.vue'),
    children: [

    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   const token = localStorage.getItem('token')
//   if (!token) return next('/login')
//   // eslint-disable-next-line camelcase
//   const { email: e_id, username: u_id } = JSON.parse(token)
//   const e = $cookie.getCookie('e_id')
//   const u = $cookie.getCookie('u_id')
//   // console.log(!token || e_id !== e || u_id !== u);
//   // eslint-disable-next-line camelcase
//   if (!token || e_id !== e || u_id !== u) return next('/login')
//   next()
// })
export default router
