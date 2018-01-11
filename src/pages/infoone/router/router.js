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
  { name: 'Home', path: '/home', component: Home },
  { name: 'Cart', path: '/cart', component: Cart },
  { name: 'Explorer', path: '/explorer', component: Explorer},
  { name: 'Me', path: '/me', component: Me},
  { name: 'Goods',path: '/goods', component: goods },
  { name: 'Seller', path: '/seller', component: seller },
  { name: 'Rating', path: '/rating', component: rating}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

router.push('/home')

export default router;
