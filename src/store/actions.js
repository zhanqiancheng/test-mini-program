import * as types from './mutation-types'
/**
 * 公共actions
 */
export const setUser = ({ commit }, v) => {
  commit(types.SET_USER, v)
}

export const setLoginState = ({ commit }, v) => {
  commit(types.SET_LOGIN_STATE, v)
}

export const setLaunched = ({ commit }) => {
  commit(types.SET_LAUNCHED)
}

export const setIPhoneX = ({ commit }) => {
  commit(types.SET_IPHONE_X)
}
