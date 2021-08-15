import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Start.vue';
import AppFooter from '../components/AppFooter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'Start',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/Cadastro.vue')
  },
  {
    path: '/tabs',
    component: AppFooter,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/artigos',
        name: 'Artigos',
        component: () => import('@/views/Artigos.vue')
      },
      {
        path: '/colecao',
        name: 'Colecao',
        component: () => import('@/views/Colecao.vue')
      },
      {
        path: '/conquistas',
        name: 'Conquistas',
        component: () => import('@/views/Conquistas.vue')
      },
      {
        path: '/home/configuracao',
        name: 'Configuracoes',
        component: () => import('@/views/Configuracao.vue')
      },
      {
        path: '/colecao/novaplanta',
        name: 'NovaPlanta',
        component: () => import('@/views/NovaPlanta.vue')
      },
      {
        path: '/colecao/planta',
        name: 'Planta',
        component: () => import('@/views/Planta.vue')
      },
      {
        path: '/colecao/planta/dicascultivo',
        name: 'DicasCultivo',
        component: () => import('@/views/DicasCultivo.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
