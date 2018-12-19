// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由组件
import Films from './views/Films.vue';
import NowPaly from './components/NowPaly';
import SoonPlay from './components/SoonPlay';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import FilmDetail from './views/FilmDetail.vue';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import myCard from './views/myCard.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'films/nowPlaying'
        },
        {
          //  首页
          path: 'films',
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
          path: 'center',
          name: 'center',
          component: Center
        }
      ]
    },
    {
      // 可以被其他子集路由利用。
      // 详情页
      path: '/film/:filmId',
      name: 'filmDetail',
      component: FilmDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 用户
      path: '/user',
      component: {
        template: `
          <div>
            <router-view></router-view>
          </div>
        `
      },
      children: [
        {
          path: 'card',
          name: 'myCard',
          component: myCard,
          // 在组件跳转之前实现路由的拦截
          beforeEnter (to, from, next) {
            // 判断用户手机号是否存在
            if (localStorage.getItem('phone')) {
              console.log('成功返回');
              next();
            } else {
              // 如果没有手机号就条回到某个路径， 同时传入一个值给后面的用
              next({
                path: '/login',
                query: {
                  redirect: to.fullPath
                }
              })
            }
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

// 需要暴露
export default router;
