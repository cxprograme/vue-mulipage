import Vue from 'vue'
import App from './infothree.vue'
import Vuex from 'vuex'
import Layout from '@/components/layout/Layout'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import IndexPage from '@/components/infothree/Index'

Vue.use(VueRouter)
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

// const router = new VueRouter({
// 	mode: 'history',
// 	base: __dirname,
// 	routes: [
// 		{
// 			path: '/index',
// 			component: Index
// 		}
// 	],
// 	linkActiveClass: 'active'

// })
/* eslint-disable no-new */
// new Vue({
//   el: '#infothree',
//   template: '<Layout/>',
//   routes: routes,
//   store: store,
//   components: { Layout: Layout },
//   render: h => h(App)
// })
// const app = new Vue({
//   router: router,
//   render: h => h(Layout),
//   data: {
//   	eventHub: new Vue()
//   }
// }).$mount('#infothree');


// const routes = [
//   { path: '/index', component: Index }
// ];

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   mode: 'history',
//   routes, // （缩写）相当于 routes: routes
//   linkActiveClass: 'active'
// });
// // 4. 创建和挂载根实例。
// // 记得要通过 router 配置参数注入路由，
// // 从而让整个应用都有路由功能
// const app = new Vue({
//   router,
//   render: h => h(Layout),
//   data: {
//   	eventHub: new Vue()
//   }
// }).$mount('#infothree');

// router.push('/')

Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/infothree/index', component: IndexPage }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router: router,
  render: h => h(Layout),
  data: {
  	eventHub: new Vue()
  }
}).$mount('#infothree');

router.push('/infothree/index')
