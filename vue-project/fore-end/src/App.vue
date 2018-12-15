<template>
  <div id="app">
    <transition
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>
    <NavBar></NavBar>
  </div>
</template>

<script>
// 引入组件
import NavBar from './components/NavBar/index';

export default {
  name: 'App',

  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import './styles/base.scss';
</style>
