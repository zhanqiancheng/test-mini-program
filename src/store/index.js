import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)

/**
 * 全局公用的state放这里
 * 如果是部分页面或模块独有的state放modules里
 */
const state = {
  // app是否launch完成
  isLaunched: false,
  // 用户数据
  user: { lastReaded: {} },
  // 是否登录
  isLogin: false,
  isIPX: false
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

export default store
