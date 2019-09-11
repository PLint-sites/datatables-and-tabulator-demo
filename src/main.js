import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './fontawesome/css/font-awesome.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
