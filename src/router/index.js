import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'Auth'
  if (authRoute) {
    next()
    return
  }
  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'Main' } : null)
  } catch (e) {
    if (e.response.status === 401) {
      next(authRoute ? null : { name: 'Auth' })
    }
  }
})

export default router
