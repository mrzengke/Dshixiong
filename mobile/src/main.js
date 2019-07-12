import Vue from 'vue'
import './plugins/axios'
import './plugins/mint.js'
import App from './App.vue'
import router from './router'
import store from './store'
// import Index from './views/Index.vue'
Vue.config.productionTip = false

// Vue.component('Index',Index);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
