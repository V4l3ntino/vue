// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
