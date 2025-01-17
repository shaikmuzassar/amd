// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BenchMark from '@/components/BenchMark.vue';
import ServerPool from '@/components/ServerPool.vue';
import Login from '@/components/Login.vue';
import Start from '@/components/Start.vue';

const routes = [
  { path: '/', redirect: '/benchmark-template', meta: { breadcrumb: 'Home' } },
  { path: '/benchmark-template', component: BenchMark ,name: 'Bench Mark Template', meta: { breadcrumb: 'Bench Mark Template' }},
  { path: '/server-pool', component: ServerPool, name: 'Server Pool', meta: { breadcrumb: 'Server Pool' }  },
  {path:"/login" ,component: Login , name:"Login" , meta: { hideNavbar: true },},
  {path: '/start',component:Start, name: Start ,meta: { breadcrumb: 'Start'}}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
