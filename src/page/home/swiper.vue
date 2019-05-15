<template>
  <!-- 轮播图 -->
  <div class="m-swiper">
    <swiper
      style="width:100%;height: 9.15rem;position: relative;"
      dots-position="center"
      :list="swiperList"
      :loop="true"
    ></swiper>
  </div>
</template>

<script>
import { Swiper } from "vux";
export default {
  data () {
    return {
      swiperList: [
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21880/19/12397/299532/5c98fc1dE76e85e5d/47bc267c8746bc84.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/11334/39/13475/335042/5c99e87dE4bbd5d6f/f2899f14023d2ee9.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/11487/25/13492/135811/5c99f021E953057c8/cb9df58e993aa67c.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t29125/291/196144431/104491/4634ac51/5beaa8f2N40122d10.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23822/18/11243/96258/5c8f11b1Eb1de93be/3173ed124262cc96.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/20183/35/12774/64329/5c9b87c8E515c6640/0d61329203237b09.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          url: "javascript",
          img:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27489/35/11737/53398/5c93d696E04f28213/9ffe06aa7cfe8c61.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        }
      ],
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang="less" scoped>
.m-swiper/deep/.vux-swiper {
    height: 9.15rem !important;
  }

.m-swiper/deep/.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {
    background-size: 100% !important;
  }
.m-swiper/deep/.vux-indicator.vux-indicator-center {
  bottom: 1.2rem
}
.m-swiper/deep/.vux-indicator.vux-indicator-center a {
  margin-left: 0.4rem;
}
.m-swiper/deep/.vux-indicator.vux-indicator-center a .vux-icon-dot {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
}
</style>
