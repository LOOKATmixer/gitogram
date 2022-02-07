import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from './modules/user'
import starred from './modules/starred'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => {
        return state.starred.data.some(starredRepo => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trendings,
    user,
    starred
  }
})
