import Vue from 'vue'
import VueTabulator from 'vue-tabulator'
import moment from 'moment'

import App from './App.vue'

Vue.config.productionTip = false

window.moment = moment
Vue.use(VueTabulator)

import './fontawesome/css/font-awesome.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
