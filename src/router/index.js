import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/Blog.vue')
      // component: About
    },
    {
      path: '/Blog',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/Blog.vue')
      // component: About
    }, {
      path: '/Git',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/Git.vue')
      // component: About
    }, {
      path: '/Project',
      component: () => import(/* webpackChunkName: "HOME" */ '../views/Project.vue')
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
