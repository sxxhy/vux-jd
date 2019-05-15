<template>
  <div class="m-home">
    <!--头部-->
    <m-header>
      <x-icon slot="header-left" type="navicon" size="40" style="fill:#fff" class="menu"></x-icon>
      <div class="search" slot="header-middle">
        <i class="logo"></i>
        <i class="search-icon"></i>
        <input type="text" class="search-text" :placeholder="searchTip">
      </div>
      <div class="login" slot="header-right">
        <a href="/login">登录</a>
      </div>
    </m-header>
    <!-- 轮播图 -->
    <m-swiper class="swiper-wrap"/>
    <!-- 广告图 -->
    <m-banner/>
    <!-- 九宫格 -->
    <m-grid/>
    <!-- 滚动新闻 -->
    <m-news/>
    <!-- 专属列表 -->
    <m-exclusive/>
    <!--  秒杀列表  -->
    <m-kill-price/>
    <!--  东家  -->
    <m-family-courtyard/>
    <!--  每日  -->
    <m-daily-stroll/>
    <!--  推荐  -->
    <m-recommend/>
    <!--  底部导航  -->
    <m-tabbar/>
    <!--  底部  -->
    <m-footer/>
  </div>
</template>

<script>
import MHeader from "../../components/public/header";
import MSwiper from "./swiper";
import MBanner from './banner';
import MGrid from "./grid";
import MNews from "./news";
import MExclusive from "./exclusive";
import MKillPrice from './killPrice'
import MFamilyCourtyard from './familyCourtyard'
import MDailyStroll from './dailyStroll';
import MRecommend from './recommend';
import MTabbar from '../../components/public/tabbar';
import MFooter from '../../components/public/footer';
export default {
  data() {
    return {
      searchTip: "厨房置家物"
    }
  },
  components: {
    MHeader,
    MSwiper,
    MGrid,
    MNews,
    MExclusive,
    MKillPrice,
    MFamilyCourtyard,
    MDailyStroll,
    MRecommend,
    MTabbar,
    MFooter,
    MBanner
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.m-home {
  .menu {
    width: 15%;
  }
  .search {
    width: 70%;
    height: 30px;
    display: flex;
    /*justify-content: flex-start;*/
    border-radius: 15px;
    flex: 1;
    background: #f7f7f7;
    i {
      display: block;
      position: relative;
    }
    .logo {
      width: 28px;
      height: 15px;
      background: url("../../assets/image/home/logo.png") no-repeat;
      background-size: 20px 15px;
      margin: 8px 8px 0 15px;
      &:after {
        content: "";
        position: absolute;
        border-right: 1px solid #ddd;
        top: 0;
        left: 26px;
        height: 16px;
      }
    }
    .search-icon {
      width: 18px;
      height: 15px;
      background: url("../../assets/image/home/jd-sprites.png") no-repeat;
      background-position: -84px 0;
      background-size: 200px;
      margin: 8px 0 0 15px;
    }
    .search-text {
      width: 100%;
      border: 0;
      color: #232326;
      height: auto;
      outline: none;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: middle;
      padding-left: 5px;
      font-size: 12px;
      margin: 0 0 0 5px;
      background-color: transparent;
    }
  }
  .login {
    width: 15%;
    text-align: center;
    height: 100%;
    a {
      color: #fff;
      font-size: 16px;
      display: block;
      height: 100%;
      line-height: 44px;
    }
  }
}

.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
.swiper-wrap +div{
  position: relative;
  margin-top: -1.4rem;
  z-index: 12;
  border-radius: .5rem .5rem 0 0;
  overflow: hidden;
}
</style>
