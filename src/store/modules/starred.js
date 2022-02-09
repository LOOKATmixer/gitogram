import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: []
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
    },
    SET_ISSUES (state, payload) {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    }
  },
  actions: {
    async getStarred ({ commit }) {
      try {
        const { data } = await api.starred.getStarred()
        commit('SET_STARRED', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        const { data } = await api.issues.getIssues({
          owner,
          repo
        })
        commit('SET_ISSUES', {
          id,
          issues: data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
