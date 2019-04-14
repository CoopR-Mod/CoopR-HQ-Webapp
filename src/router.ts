import Vue from 'vue';
import Router from 'vue-router';
import Characters from './views/Characters.vue';
import NotFound from './views/NotFound.vue';
import News from '@/views/News.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'news',
      component: News,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    }
  ],
});
