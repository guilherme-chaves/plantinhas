import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Start.vue';
import AppFooter from '../components/AppFooter.vue';
import useFirebaseAuth from "../api/firebase-auth";
const state = useFirebaseAuth();

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
    path: '/novaplanta',
    name: 'NovaPlanta',
    component: () => import('@/views/NovaPlanta.vue')
  },
  {
    path: '/tabs',
    component: AppFooter,
    children: [
      {
        path: '/',
        name: 'Tabs',
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
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('user' + state.user.value);
  if (state.user.value && (to.name === 'Login' || to.name === 'Cadastro' || to.name === 'Start')) {
    next({ name: "Tabs", replace: true });
  /* Descomentar isso antes de enviar para produção!!!!
  } else if (!state.user.value && !(to.name === 'Login' || to.name === 'Cadastro' || to.name === 'Start')) {
    next({ name: "Start", replace: true });*/
  } else {
    next();
  }
})


export default router
