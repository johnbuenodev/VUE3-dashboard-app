import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';

import HomeDashBoard from '../components/HomeDashBoard.vue';

import RelatoriosPage from '../components/RelatoriosPage.vue';
import ProductsPage from '../components/ProductsPage.vue';
import VendasPage from '../components/VendasPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeDashBoard
  },
  {
    path: '/produtos',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/vendas',
    name: 'vendas',
    component: VendasPage
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: RelatoriosPage
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginPage
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
