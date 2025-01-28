// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BenchMark from '@/components/BenchMark.vue';
import ServerPool from '@/components/ServerPool.vue';
import Login from '@/components/Login.vue';
import Nginx from '@/components/RunConfiguration/Nginx.vue';
import FFMPEG from '@/components/RunConfiguration/FFMPEG.vue';
import RunConfig from '@/components/RunConfiguration/ScheduleTest.vue';
import SearchResult from '@/components/SearchResult.vue';

const routes = [
  { path: '/', redirect: '/benchmark-template', meta: { breadcrumb: 'Home' } },
  { path: '/benchmark-template', component: BenchMark ,name: 'Benchmark Template', meta: { breadcrumb: 'Benchmark Template' }},
  { path: '/search-result', component: SearchResult ,name: 'Search Result', meta: { breadcrumb: 'Search Result' }},
  { path: '/server-pool', component: ServerPool, name: 'Server Pool', meta: { breadcrumb: 'Server Pool' }  },
  {path:"/login" ,component: Login , name:"Login" , meta: { hideNavbar: true },},
  {path: '/Nginx',component:Nginx, name: "Nginx Schedule Test" ,meta: { breadcrumb: 'Home / Start / Schedule'}},
  {path: '/FFMPEG',component: FFMPEG , name: "FFMPEG Schedule Test" ,meta: { breadcrumb: 'Home / Start / Schedule'}},
  {path: '/Schedule_Test', component: RunConfig, name: 'Schedule Test'}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
