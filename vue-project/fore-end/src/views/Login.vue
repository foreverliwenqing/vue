<template>
  <div class="web-login">
    <div class="loginImg">
      <img src="../images/login.png" alt="">
    </div>
    <div class="loginForm">
      <div class="phone">
        <input type="text" placeholder="手机号" class="input-control">
        <div class="yanz">获取验证码</div>
      </div>
      <div class="phone">
        <input type="text" placeholder="验证码" class="input-control">
      </div>
    </div>
    <div class="loginBtn">
      <span>登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.web-login {
  font-size: px2rem(15);
  flex:1;
  .loginImg {
    margin: px2rem(79) auto px2rem(40);
    text-align: center;
    height: px2rem(60);
    line-height: px2rem(60);
    img {
      height: 100%;
    }
  }
  .loginForm {
    line-height: px2rem(15);
    padding: px2rem(20) px2rem(20);
    width: 100%;
    font-size: px2rem(20);
    color: #191a1b;
    border: 0;
    .phone {
      position: relative;
      input {
        border:none;
        width: 100%;
        height: px2rem(55);
        border-bottom: px2rem(1) solid #eee;
        font-size: px2rem(16);
      }
      .yanz {
        position:absolute;
        right: 0;
        top: px2rem(19);
        font-size: px2rem(13);
        color:#c5c1c1;
      }
    }
  }
  .loginBtn {
    margin-top: 70px;
    span {
      line-height: px2rem(45);
      font-size: px2rem(16);
      margin: px2rem(70) px2rem(25) 0;
      border-radius: px2rem(3);
      text-align: center;
      background-color: #ff5f16;
      height: px2rem(44);
      color: #fff;
      border: none;
      display: block;
    }
  }
}

</style>
