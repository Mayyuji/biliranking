import Vue from 'vue'
import VueRouter from 'vue-router'
import Leaderboard from '../views/Leaderboard'
import popular from '../views/popular'
import everyweek from '../views/everywek'
import brushed from '../views/brushed'
import user from '../views/user.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'Leaderboard',
    },
    {
      path: '/Leaderboard',
      component: Leaderboard,
      meta: {
        name: 'Leaderboard',
        index: 0,
      },
    },
    {
      path: '/user',
      component: user,
    },
    {
      path: '/popular',
      component: popular,
      meta: {
        name: 'popular',
        index: 1,
      },
    },
    {
      path: '/everyweek',
      component: everyweek,
      meta: {
        name: 'everyweek',
        index: 2,
      },
    },
    {
      path: '/brushed',
      component: brushed,
      meta: {
        name: 'brushed',
        index: 3,
      },
    },
    {
      path: '*',
      redirect: 'Leaderboard',
    },
  ],
})

export default router
