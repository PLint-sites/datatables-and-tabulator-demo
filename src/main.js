import Vue from 'vue'
import VueTabulator from 'vue-tabulator'
import moment from 'moment'

import App from './App.vue'

Vue.config.productionTip = false

// Although we ignore moment's locales, we may import a single one and use it.
// require('moment/locale/nl')
// moment.locale('nl')
// console.log('current date: ', moment().format('dddd, MMMM D YYYY'))

window.moment = moment
Vue.use(VueTabulator)

import './fontawesome/css/font-awesome.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
