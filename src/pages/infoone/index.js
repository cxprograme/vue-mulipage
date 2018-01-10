import Vue from 'vue'
import App from './infoone.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import goods from '@/components/goods/goods';
import seller from '@/components/seller/seller';
import rating from '@/components/rating/rating';
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#infoone',
//   template: '<App/>',
//   components: { App: App }
// })

// Vue.use(VueRouter);
Vue.use(VueResource);
// const routes = [
//   { path: '/goods', component: goods },
//   { path: '/seller', component: seller },
//   {path: '/rating', component: rating}
// ];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   mode: 'history',
//   routes, // （缩写）相当于 routes: routes
//   linkActiveClass: 'active'
// });
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router: router,
  render: h => h(App),
  data: {
  	eventHub: new Vue()
  }
}).$mount('#infoone');


// router.push('/goods');
