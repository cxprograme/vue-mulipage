import Vue from 'vue'
import App from './infothree.vue'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(Vuex)
let store = new Vuex.Store({
	state:{
		totalPrice: 0
	},
	mutations: {
		increment: function(state, price) {
			state.totalPrice +=price;
		},
		decrement: function(state, price) {
			state.totalPrice -=price;
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#infothree',
  template: '<App/>',
  store: store,
  components: { App: App }
})
