import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'// ++
// import './assets/css/resert.css'

// 引入element
// import element from './elementUi'
// Vue.use(element)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,    // ++
  render: h => h(App)
}).$mount('#app')
// Vue.use(router)
