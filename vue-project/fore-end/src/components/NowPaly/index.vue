<template>
  <!-- list -->
  <div class="film-list-content">
    <ul>
      <li
        v-for="(item, index) in films"
        :key="index">
        <div class="img">
          <img :src="item.poster" alt="">
        </div>
        <div class="info">
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="type">{{ item.filmType.name }}</span>
          </div>
          <div>
            <span class="label">观众评分</span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>
            <span class="label">主演： {{ actorsList(item.actors) }}</span>
          </div>
          <div>
            <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
          </div>
        </div>
        <div class="buy">购票</div>
      </li>
    </ul>

    <div class="load-more" @click="loadMore">{{ loadMoreText }}</div>
  </div>
  <!-- /list -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'NowPlay',

  data () {
    return {
      films: [],

      loadMoreText: '点击，加载下一页',

      pageNum: 1, // 当前页码
      pageSize: 10, // 每页条数
      totalPage: 0 // 总页数
    }
  },

  methods: {
    /**
     * 获取影片
     */
    getFilms () {
      // localhost:3000/api/film/list
      axios.get('/api/film/list', {
        params: {
          // get 请求的参数要放在这个里面传递
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((response) => {
        // PS: res 不单单包含后台给的数据，还有一些个额外的东西。
        // console.log(res);
        let result = response.data;
        console.log(result);

        // 一共多少页
        this.totalPage = Math.ceil(result.data.total / this.pageSize);

        // 判断是否还有更多页
        if (this.pageNum >= this.totalPage) {
          // 没有更多页面
          this.loadMoreText = '别拉啦，没有更多。';
        }

        if (result.code === 0) {
          // this.films = result.data.films;
          // 追加
          // this.films = this.films.push(...result.data.films);  √
          this.films = this.films.concat(result.data.films);
        } else {
          alert(result.msg);
        }
      })
    },

    /**
     * 排列我们主演列表
     * @param {Array} list 主演列表
     */
    actorsList (list) {
      let arr = [];
      if (list) {
        arr = list.map(item => {
          return item.name;
        });
      }

      return arr.join(' ');
    },

    /**
     * 加载更多
     */
    loadMore () {
      // 对当前页码加1

      if (this.pageNum < this.totalPage) {
        this.pageNum++;
        this.getFilms();
      }
    }
  },

  created () {
    this.getFilms();
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';

.film-list-content {
  li {
    display: flex;
    margin: 0 px2rem(15);
    padding: px2rem(15) 0;
    border-bottom: px2rem(1) solid #ededed;
  }

  .img {
    flex-shrink: 0;
    width: px2rem(66);
    height: px2rem(94);
    img {
      width: 100%;
    }
  }

  .info {
    min-width: 100px;
    padding: 0 px2rem(10);
    font-size: px2rem(14);
    &>div {
      width: 100%;
      height: px2rem(22);
      line-height: px2rem(22);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label {
      color: #797d82;
      margin-right: px2rem(2);
    }
    .name {
      font-size: px2rem(16);
      color: #191a1b;
    }
    .type {
      font-size: px2rem(12);
      color: #fff;
      background: #d2d6dc;
      padding: 0 px2rem(2);
    }
    .grade {
      color: #ffb232;
    }
  }

  .buy {
    flex-shrink: 0;
    align-self: center;
    width: px2rem(50);
    height: px2rem(26);
    line-height: px2rem(26);
    font-size: px2rem(14);
    color: #ff5f16;
    border: px2rem(1) solid #ff5f16;
    text-align: center;
    border-radius: px2rem(4);
  }
}

.load-more {
  height: px2rem(30);
  line-height: px2rem(30);
  text-align: center;
}
</style>
