import Vue from 'vue';
import Router from 'vue-router';
import Character from './views/Character.vue';
import NotFound from './views/NotFound.vue';
import News from '@/views/News.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    }
  ],
});
