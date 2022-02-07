import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: false
  },
  mutations: {
    SET_USER (state, payload) {
      if (payload) {
        state.data = payload
      }
    }
  },
  actions: {
    async getUser ({ commit }) {
      try {
        const { data } = await api.user.getUserData()

        commit('SET_USER', data)
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
