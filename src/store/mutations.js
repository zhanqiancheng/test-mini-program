import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_LOGIN_STATE] (state, v) {
    state.isLogin = v
  },
  [types.SET_LAUNCHED] (state) {
    state.isLaunched = true
  },
  [types.SET_IPHONE_X] (state) {
    state.isIPX = true
  }
}
