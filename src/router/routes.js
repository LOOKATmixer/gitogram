import { feeds } from '../pages/feeds/'
import { stories } from '../pages/stories/'
import { auth } from '../pages/auth/'

export default [
  {
    name: 'Main',
    path: '/',
    component: feeds
  },
  {
    name: 'Stories',
    path: '/stories',
    component: stories
  },
  {
    name: 'Auth',
    path: '/auth',
    component: auth
  }]
