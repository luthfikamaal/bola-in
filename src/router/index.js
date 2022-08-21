import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import IndexPlayer from '../views/player/IndexPlayer.vue';
import DetailPlayer from '../views/player/DetailPlayer.vue';
import IndexMatch from '../views/match/IndexMatch.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/player',
      name: 'player',
      component: IndexPlayer,
    },
    {
      path: '/player/:id/:name',
      name: 'detailPlayer',
      component: DetailPlayer,
    },
    {
      path: '/match',
      name: 'match',
      component: IndexMatch,
    },
  ],
});

export default router;
