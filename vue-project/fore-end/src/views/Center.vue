<template>
  <div class="main">
    <div class="center-view">
      <div class="avatar">
        <img src="../images/avator.png" alt="">
        <div class="nick-name" @click="login">立即登录</div>
      </div>
      <ul class="my-order-tab">
        <li>
          <img src="../images/dingd.png" alt="">
          <div class="common-p">电影订单</div>
        </li>
        <li>
          <img src="../images/pint.png" alt="">
          <div class="common-p">拼团订单</div>
        </li>
      </ul>
      <div class="margin-set my-card" @click='myCard'>
        <img src="../images/ka.png" alt="" class="ico">
        <span>卖座卡</span>
        <img src="../images/right.png" alt="" class="arrow">
      </div>
      <div class="margin-set my-card">
        <img src="../images/cash.png" alt="" class="ico">
        <span>余额</span>
        <span style="text-align:right;color:#797d82">
          <i>￥</i>
          <span style="margin-left:0;width:0;margin-right:10px">0</span>
        </span>
        <img src="../images/right.png" alt="" class="arrow">
      </div>
      <div class="margin-set my-card">
        <img src="../images/sezhi.png" alt="" class="ico">
        <span>设置</span>
        <img src="../images/right.png" alt="" class="arrow">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',

  methods: {
    login () {
      console.log(1);
      this.$router.push({
        path: '/login'
      })
    },
    myCard () {
      console.log(1);
      this.$router.push({
        path: '/user/card'
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.main {
  flex: 1;
  background: #f4f4f4;
}
.center-view {
  background: #f4f4f4;
  .avatar {
    height: px2rem(200);
    width: 100%;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    padding-left: px2rem(22);
    align-items: center;
    display: flex;
    img {
      width: px2rem(77);
      height: px2rem(77);
      color: white;
      float:left;
      margin-right: px2rem(20);
    }
    .nick-name {
      font-size: px2rem(16);
      float: left;
      color: white;
    }
  }
  .my-order-tab {
    height: px2rem(79);
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    background: #fff;
    margin-bottom: px2rem(10);
    li {
      width: px2rem(180);
      height: px2rem(50);
      img {
        width: px2rem(26);
        height: px2rem(26);
      }
    }
  }
  .margin-set {
    padding: 0 px2rem(15);
    height: px2rem(49);
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: px2rem(10);
    .arrow {
      text-align: right;
      width: px2rem(16);
      height: px2rem(20);
      float: right;
      display: block;
    }
    .ico {
      width: px2rem(20);
      height: px2rem(20);
    }
    span {
      margin-left: px2rem(15);
      width: px2rem(520);
    }
  }
}

</style>
