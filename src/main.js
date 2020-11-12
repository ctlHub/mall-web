import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import SvgIcon from '@/components/SvgIcon'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
