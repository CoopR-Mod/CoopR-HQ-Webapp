import Vue from 'vue';
import Router from 'vue-router';
import Character from './views/Character.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: 404,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    }
  ],
});
