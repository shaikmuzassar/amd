// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BenchMark from '@/components/BenchMark.vue';
import ServerPool from '@/components/ServerPool.vue';
import Login from '@/components/Login.vue';
import Start from '@/components/Start.vue';
import SearchResult from '@/components/SearchResult.vue';

const routes = [
  { path: '/', redirect: '/benchmark-template', meta: { breadcrumb: 'Home' } },
  { path: '/benchmark-template', component: BenchMark ,name: 'Benchmark Template', meta: { breadcrumb: 'Benchmark Template' }},
  { path: '/search-result', component: SearchResult ,name: 'Search Result', meta: { breadcrumb: 'Search Result' }},
  { path: '/server-pool', component: ServerPool, name: 'Server Pool', meta: { breadcrumb: 'Server Pool' }  },
  {path:"/login" ,component: Login , name:"Login" , meta: { hideNavbar: true },},
  {path: '/start',component:Start, name: "Schedule Test" ,meta: { breadcrumb: 'Start'}}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
