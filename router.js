import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72bf0f35 = () => interopDefault(import('..\\pages\\user\\wishlist\\index.vue' /* webpackChunkName: "pages_user_wishlist_index" */))
const _152fe3ac = () => interopDefault(import('..\\pages\\product_detail\\_id.vue' /* webpackChunkName: "pages_product_detail__id" */))
const _34231e05 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user/wishlist",
    component: _72bf0f35,
    name: "user-wishlist"
  }, {
    path: "/product_detail/:id?",
    component: _152fe3ac,
    name: "product_detail-id"
  }, {
    path: "/",
    component: _34231e05,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
