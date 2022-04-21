/*
 * @Author: Harry
 * @Date: 2021-12-26 15:16:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-03-29 12:39:30
 * @FilePath: \vant-u\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/animate.css'
import vant from '@/utils/vantui.js'
import '@/assets/css/icon/iconfont.css'
import '@/assets/css/reset.less'
import 'amfe-flexible'
const app = createApp(App)
vant(app)
app.use(store).use(router).mount('#app')
