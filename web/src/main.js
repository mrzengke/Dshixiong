import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/reset.css'
import MyIndex from './components/index.vue'
import MyTou from './components/toubu.vue'
import MyDi from './components/dibu.vue'
import './plugins/element.js'

Vue.config.productionTip = false

 Vue.component('MyTou',MyTou);//头部全局组件
Vue.component('MyIndex',MyIndex);
Vue.component('MyDi',MyDi);//底部全局组件


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
