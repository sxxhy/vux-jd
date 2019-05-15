import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

/*router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})*/
export default router
