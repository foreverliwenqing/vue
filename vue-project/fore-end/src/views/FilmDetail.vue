<template>
  <div class="film">
    <div class="film-header">
      <div class="goBack">
        <img src="../images/goback.png" alt="">
      </div>
      <div class="lazy-img">
        <img :src="result.poster" alt="">
      </div>
    </div>
    <div class="filmDetail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ result.name }}</span>
          <span class="item">{{ result.filmType && result.filmType.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ result.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-type">{{ result.category }}</div>
      <div class="film-time">{{ result.premiereAt }}</div>
      <div class="film-position">{{ result.nation }}  | {{ result.runtime }}分钟</div>
      <div :class="[classA, classB]">{{ result.synopsis }}</div>
      <div class="toggle" @click="downLa">
        <img src="../images/toggle.png" alt="" :class="upper">
      </div>
    </div>
    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>
      <div class="actionList">
        <ul>
          <li
            v-for="(item, index) in films"
            :key="index"
          >
            <div class="showImg">
              <img :src="item.avatarAddress" alt="">
            </div>
            <span class="actors-name" style="font-size:12px">{{ item.name }}</span>
            <span class="actors-role" style="font-size:10px">{{ item.role }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="photos">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all">全部(6)
          <i class="iconfont icon-quanju_liebiaojiantou" style="font-size: 13px;"></i>
        </span>
      </div>
      <div class="photos-list">
        <ul>
          <li v-for="(item, index) in films" :key='index'>
            <img :src="item.avatarAddress" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="goSchedule">
      选座购票
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilmDetail',
  // 用data接收一下请求的数据
  data () {
    return {
      result: '',
      // films: ''
      // filmsLogo: ''
      classA: 'film-text',
      classB: '',
      upper: '',
      films: ''
    }
  },

  methods: {
    // localhost:3000/api/film/list
    getFilmDetail () {
      axios.get('/api/film/filmDetail', {
        params: {
          filmId: this.$route.params.filmId
        }
      }).then((response) => {
        let result = response.data.data[0];
        this.result = result;
        // let filmsLogo = response.data.data.poster;
        // this.filmsLogo = filmsLogo;
        let films = response.data.data[0].actors;
        this.films = films;
        console.log(result);
        console.log(this.films);
      })
    },
    downLa () {
      if (this.classB === '') {
        this.classB = 'down';
        this.upper = 'upper'
      } else {
        this.classB = '';
        this.upper = ''
      }
    }
  },
  created () {
    this.getFilmDetail();
  }

}
</script>

<style lang="scss" scoped>
@import "@/styles/common/px2rem.scss";

.film {
  flex: 1;
  background: #eee;
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
      // overflow: hidden;
      width: 100%;
      height: px2rem(200);
      img {
        width: 100%;
        height: 100%;
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
    .toggle {
      text-align: center;
      .upper {
        transform: rotate(180deg);
      }
    }
    .film-type, .film-time,.film-text,.film-position{
    margin-top: px2rem(8);
    font-size: px2rem(14);
    line-height: px2rem(18);
      font-size: px2rem(13);
    }
    .film-text {
      overflow: hidden;
      height: px2rem(37);
      transition: height .5s ease;
    }
    .down {
      height: px2rem(70);
    }
  }
  .actors {
    margin-top: px2rem(10);
    background-color: #fff;
    .actors-title-bar {
      width: 100%;
      padding: px2rem(15);
      .actors-title-text {
        font-size: px2rem(16);
        text-align: left;
        color: #191a1b;
      }
    }
    .actionList {
      width: px2rem(360);
      overflow-x: auto;
      overflow-y: hidden;
      height: px2rem(140);
      ul {
        width: 100%;
        height: px2rem(141);
        padding-left: px2rem(15);
        background: #fff;
        display: flex;
        li {
          width: px2rem(85);
          height: px2rem(140);
          margin-right: px2rem(10);
          float:left;
          .showImg {
            width: px2rem(85);
            height: px2rem(85);
            background: rgb(249, 249, 249);
            img {
              width: px2rem(85);
              height: px2rem(85);
            }
          }
          .actors-name {
            padding-top: px2rem(10);
            padding-bottom: px2rem(5);
            overflow: hidden;
            width: px2rem(85);
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            text-align: center;
          }
          .actors-role {
            display: block;
            text-align: center;
            color: #797d82;
          }
        }
      }
    }
  }
  .photos {
    margin-top: px2rem(10);
    margin-bottom: px2rem(20);
    background-color: #fff;
    .photos-title-bar {
      height: px2rem(62);
      width: 100%;
      padding: px2rem(15);
      .photos-title-text {
        font-size: px2rem(16);
        text-align: left;
        color: #191a1b;
      }
      .photos-to-all {
        font-size: 13px;
        color: #797d82;
        float: right;
      }
    }
  }
  .photos-list {
    height: px2rem(145);
    background: rgb(255, 255, 255);
    ul {
      overflow-x: auto;
      overflow-y: hidden;
      width: 100%;
      display: flex;
      li {
        margin-left: px2rem(10);
        float: left;
        img {
          width:85px;
          height:85px;
          float:left;
        }
      }
    }
  }
  .goSchedule {
    flex-shrink: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: px2rem(16);
    line-height: px2rem(49);
    position: fixed;
    bottom: 0;
  }
}
</style>
