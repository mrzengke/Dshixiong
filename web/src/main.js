import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/reset.css'
import MyIndex from './components/index.vue'
import MyDi from './components/dibu.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.component('MyIndex',MyIndex);//头部全局组件
Vue.component('MyDi',MyDi);//底部全局组件


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
