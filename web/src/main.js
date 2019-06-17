import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/reset.css'
import MyIndex from './components/index.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.component('MyIndex',MyIndex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
