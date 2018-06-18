import Vue from 'vue';
import Router from 'vue-router';
import GenderPoll from '@/components/GenderPoll';
import BlueSquare from '@/components/BlueSquare';
import CanvasSquare from '@/components/CanvasSquare';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GenderPoll',
      component: GenderPoll,
    },
    {
      path: '/BlueSquare',
      name: 'BlueSquare',
      component: BlueSquare,
    },
    {
      path: '/CanvasSquare',
      name: 'CanvasSquare',
      component: CanvasSquare,
    },
  ],
});
