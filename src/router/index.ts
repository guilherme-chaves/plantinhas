import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import AppFooter from '../views/AppFooter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/tabs/',
    name: 'Tabs',
    component: AppFooter,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'artigos',
        component: () => import('@/views/artigos.vue')
      },
      {
        path: 'colecao',
        component: () => import('@/views/colecao.vue')
      },
      {
        path: 'conquistas',
        component: () => import('@/views/conquistas.vue')
      },
      {
        path: 'configuracao',
        component: () => import('@/views/Configuracao.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
