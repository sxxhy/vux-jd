<template>
  <!-- 滚动新闻 -->
    <div class="scroll-news">
      <a href="#" class="news-tip">
        <img
          src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"
          alt
        >
      </a>
      <div class="news-wrap">
        <ul class="news-list" ref="news">
          <li class="news-item" v-for="item of newsList">
            <a href="#">
              <span class="left-title">{{item.title}}</span>
              {{item.content}}
            </a>
          </li>
          <li class="news-item">
            <a href="#">
              <span class="left-title">{{newsList[0].title}}</span>
              {{newsList[0].content}}
            </a>
          </li>
        </ul>
      </div>
      <a href="#" class="news-more">
        <i class="line"></i>
        更多
      </a>
    </div>
</template>
<script>
export default {
  data () {
    return {
      newsList: [
        {title: '最新', content: '苹果iPad官网上架官翻版'},
        {title: 'HOT', content: '华为终于爆发！第一款升降式手机成“千元机霸”!'},
        {title: '热门', content: '宝宝3天才拉一次臭臭，是便秘还是攒肚？'},
        {title: '推荐', content: 'iPhone XR滑近2000开始探底！128G太靓了'}
      ],
      newsIndex: 0,
      timer: ''
    }
  },
  methods: {

  },
  mounted () {
    let self = this;
    self.timer = setInterval(function () {
      self.newsIndex++;
      if (self.newsIndex <= self.newsList.length) self.$refs.news.className = 'news-list';
      self.$refs.news.style.transform = `translate3d(0,-${self.newsIndex*1.2}rem,0)`;
      if (self.newsIndex > self.newsList.length) {
        self.newsIndex = 0;
        self.$refs.news.className = 'news-list news-table';
        self.$refs.news.style.transform = `translate3d(0,0,0)`;
      }
    }, 2000)
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" scoped>
.scroll-news {
  margin: 0 0 0.4rem 0;
  height: 1.5rem;
  font-size: 0.6rem;
  background-color: #fff;
  padding: 0 0.25rem;
  position: relative;
  .news-tip {
    width: 3.65rem;
    height: 0.8rem;
    position: absolute;
    top: 0.35rem;
    left: 0.4rem;
    display: block;
    img {
      width: 3.65rem;
      height: 0.8rem;
    }
  }
  .news-wrap {
    padding: 0 2.1rem 0 3.75rem;
    height: 1.5rem;
    overflow: hidden;
    .news-list {
      transform: translate3d(0, 0, 0);
      transition: transform 500ms ease-in-out;
      &.news-table {
        transition: transform 0ms ease-in-out;
      }
      .news-item {
        font-size: 0.6rem;
        line-height: 0.8rem;
        height: 0.8rem;
        margin: 0.4rem 0.3rem;
        a {
          color: #181818;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: block;
          line-height: 0.8rem;
          height: 0.8rem;
          .left-title {
            color: #f23030;
            padding: 0 0.3rem 0 0.4rem;
          }
        }
      }
    }
  }
  .news-more {
    font-size: 0.6rem;
    color: #181818;
    position: absolute;
    right: 0.4rem;
    top: 0.35rem;
    line-height: 0.8rem;
    .line {
      background: #ececec;
      width: 0.05rem;
      height: 0.8rem;
      display: inline-block;
      margin-right: 0.25rem;
      vertical-align: middle;
    }
  }
}
</style>

