import Vue from 'vue'
import App from './infotwo.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#infotwo',
  template: '<App/>',
  components: { App: App }
})
