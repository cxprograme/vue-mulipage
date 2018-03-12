import Vue from 'vue'
import App from './infofour.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#infofour',
  template: '<App/>',
  components: { App: App }
})
