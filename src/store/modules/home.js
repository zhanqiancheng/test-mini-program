/**
 * home模块的store
 */
const state = {
  test: ''
}

const getters = {
  test: state => state.test
}

const actions = {
  setTest ({ commit }, v) {
    commit('SET_TEST', v)
  }
}

const mutations = {
  SET_TEST (state, v) {
    state.test = v
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
