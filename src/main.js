import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'// ++
// import './assets/css/resert.css'

// 引入element
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Card, Col, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//css文件很容易忘记引入


Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);

new Vue({
  router,
  store,    // ++
  render: h => h(App)
}).$mount('#app')
// Vue.use(router)
