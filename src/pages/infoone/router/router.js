import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的四个页面
import Home from '@/components/home/Home'
import Cart from '@/components/cart/Cart'
import Explorer from '@/components/explorer/Explorer'
import Me from '@/components/me/Me'
import goods from '@/components/goods/goods';
import seller from '@/components/seller/seller';
import rating from '@/components/rating/rating';

//使用路由插件
Vue.use(VueRouter)

const routes = [
  // { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  // { path: '/explorer', component: Explorer},
  // { path: '/me', component: Me},
  { path: '/goods', component: goods },
  { path: '/seller', component: seller },
  {path: '/rating', component: rating}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

router.push('/goods')

export default router;
