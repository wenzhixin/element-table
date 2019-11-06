import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/highlight'
import './plugins/table'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#examples')
