<template>
  <div class="film">
    <div class="film-header">
      <div class="goBack">
        <img src="../images/goback.png" alt="">
      </div>
      <div class="lazy-img">
        <img src="../images/haiwang.jpg" alt="">
      </div>
    </div>
    <div class="filmDetail">
      <div class="col">
        <div class="film-name">
          <span class="name">海王</span>
          <span class="item">3D</span>
        </div>
        <div class="film-grade">
          <span class="grade">7.7</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-type">动作 | 奇幻 | 冒险</div>
      <div class="film-time">2018-12-07上映</div>
      <div class="film-position">美国   澳大利亚  | 143分钟</div>
      <div class="film-text">本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmDetail'
}
</script>

<style lang="scss" scoped>
@import "@/styles/common/px2rem.scss";

.film {
  flex: 1;
  .film-header {
    .goBack {
      height: px2rem(30);
      position: absolute;
      top: px2rem(5);
      left: px2rem(5);
      z-index: 10;
      img {
        width: px2rem(30);
      }
    }
    .lazy-img {
      img {
        width: 100%;
      }
    }
  }
  .filmDetail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;
    color: #797d82;
    .col {
      display: flex;
      align-items: center;
      .film-name {
        width: px2rem(256);
        color: black;
      }
      .film-grade {
        width: calc(100% - 250px);
        text-align: right;
        color: orange;
        font-style: ceil($number: 0)
      }
    }
  }
  .film-type, .film-time,.film-text{
    margin-top: px2rem(8);
    font-size: px2rem(14);
    line-height: px2rem(18);
  }
}
</style>
