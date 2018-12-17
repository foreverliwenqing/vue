<template>
  <div class="home">
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
// 引入NavBar组件
import NavBar from '../components/NavBar/index';

export default {
  name: 'Home',

  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.home {
  display: flex;
  flex-direction: column;
  height:100%
}
</style>
