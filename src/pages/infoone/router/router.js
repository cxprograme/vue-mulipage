import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的四个页面
import Home from '@/components/home/Home'
import Cart from '@/components/cart/Cart'
import Explorer from '@/components/explorer/Explorer'
import Me from '@/components/me/Me'
import Infoone from '@/pages/infoone/infoone';
import BookDetail from '@/components/bookdetail/BookDetail';

//使用路由插件
Vue.use(VueRouter)

const routes = [
/*  {
    name:'infoone',
    path:'/infoone',
    component:Infoone,
    children:[
      { name: 'Home', path: 'home', component: Home },
      { name: 'Cart', path: 'cart', component: Cart },
      { name: 'Explorer', path: 'explorer', component: Explorer},
      { name: 'Me', path: 'me', component: Me}
    ]
  }*/
  { name: 'Home', path: '/infoone/home', component: Home },
  { name: 'Cart', path: '/infoone/cart', component: Cart },
  { name: 'Explorer', path: '/infoone/explorer', component: Explorer},
  { name: 'Me', path: '/infoone/me', component: Me},
  { name: 'BookDetail',path: 'book/:id', component:BookDetail}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

router.push('/infoone/home')

export default router;
