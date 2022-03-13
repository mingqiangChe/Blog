import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [

    {
      path: '/Home',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/Home.vue')
      // component: About
    },
    {
      path: '/About',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/About.vue')
      // component: About
    }, {
      path: '/Error',
      component: () => import(/* webpackChunkName: "About" */ '../views/error/Error.vue')
      // component: About
    }
  ]
})
