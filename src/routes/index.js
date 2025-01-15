// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BenchMark from '@/components/BenchMark.vue';
import ServerPool from '@/components/ServerPool.vue';

const routes = [
  { path: '/', redirect: '/benchmark-template', meta: { breadcrumb: 'Home' } },
  { path: '/benchmark-template', component: BenchMark ,name: 'Bench Mark Template', meta: { breadcrumb: 'Bench Mark Template' }},
  { path: '/server-pool', component: ServerPool, name: 'Server Pool', meta: { breadcrumb: 'Server Pool' }  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
