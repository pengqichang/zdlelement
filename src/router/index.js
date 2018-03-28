import Vue from 'vue';
import Router from 'vue-router';

// 引入引入组件页面

import helloWorld from '../components/helloWorld.vue';

Vue.use(Router);

// const routes = [{
//   path: '/',
//   redirect: '/goods'
// }];

const routes = [
  {
    path: '/',
    redirect: '/helloWorld'
  },
  {
    path: '/helloWorld',
    component: helloWorld
  }
];

export default new Router({
  linkActiveClass: 'active',
  routes
});
