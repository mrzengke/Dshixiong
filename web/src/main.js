import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/reset.css'
import './css/styles.css'


import MyIndex from './components/index.vue'
import MyDi from './components/dibu.vue'
import './plugins/element.js'


// 开关
import kaiguan from './components/kaiguan.vue'
Vue.prototype.GLOBAA = kaiguan




import quanjuzuj from './components/quanjuzuj.vue'
Vue.prototype.GLOBAL = quanjuzuj




Vue.config.productionTip = false
Vue.component('MyIndex',MyIndex);//头部全局组件
Vue.component('MyDi',MyDi);//底部全局组件


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')








