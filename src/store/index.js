/*
 * @Author: Harry
 * @Date: 2021-12-26 15:16:20
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-04-21 10:29:46
 * @FilePath: \webcli\src\store\index.js
 */
import { createStore } from 'vuex'
import home from '@/store/home'
export default createStore({
  modules: {
    home
  }
})
