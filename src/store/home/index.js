/*
 * @Author: Harry
 * @Date: 2022-03-27 15:31:36
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-03-27 16:53:48
 * @FilePath: \vant-u\src\store\history\index.js
 */
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
