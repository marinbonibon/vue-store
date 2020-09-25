import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';
import NewProduct from '@/components/Products/NewProduct.vue';
import Product from '@/components/Products/Product.vue';
import ProductList from '@/components/Products/ProductList.vue';
import Checkout from '@/components/User/Checkout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/new',
    name: 'new',
    component: NewProduct,
  },
  {
    path: '/list',
    name: 'list',
    component: ProductList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
