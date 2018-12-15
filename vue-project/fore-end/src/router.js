// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
import Films from './views/Films.vue';
import NowPaly from './components/NowPaly';
import SoonPlay from './components/SoonPlay';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      // 首页
      path: '/films',
      name: 'films',
      component: Films,
      children: [
        {
          path: 'nowPlaying',
          name: 'nowPlaying',
          component: NowPaly
        },
        {
          path: 'comingSoon',
          name: 'comingSoon',
          component: SoonPlay
        }
      ]
    },
    {
      // 影院页
      path: '/cinemas',
      name: 'cinemas',
      component: Cinema
    },
    {
      // 个人中心页
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
