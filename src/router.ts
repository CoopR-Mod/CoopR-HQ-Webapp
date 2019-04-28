import Vue from 'vue';
import Router from 'vue-router';
import Characters from './views/Characters.vue';
import NotFound from './views/NotFound.vue';
import News from '@/views/News.vue';
import User from '@/views/User.vue';
import UserDetails from '@/views/UserDetails.vue';
import Loadout from '@/views/Loadout.vue';
import DiscordChat from '@/views/DiscordChat.vue';
import NewCharacter from '@/views/NewCharacter.vue';
import Login from '@/views/Login.vue';
import Store from '@/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      beforeEnter: (to, from, next) => {
        const user = Store.state.user;
        if (typeof user === 'undefined') {
          next('/login');
        } else {
          next();
        }
      },
      component: User,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/userdetails',
      name: 'userdetails',
      component: UserDetails,
    },
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
      beforeEnter: (to, from, next) => {
        const user = Store.state.user;
        if (typeof user === 'undefined') {
          next('/login');
        } else {
          next();
        }
      },
      component: Characters,
    },
    {
      path: '/newcharacter',
      name: 'newcharacter',
      component: NewCharacter,
    },
    {
      path: '/loadout',
      name: 'loadout',
      component: Loadout,
    },
    {
      path: '/discord',
      name: 'discord',
      component: DiscordChat,
    },
  ],
});
