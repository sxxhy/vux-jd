<template>
  <!-- 九宫格 -->
  <div class="m-grid">
    <div class="grid-bg">
      <img src="https://m.360buyimg.com/mobilecms/s750x324_jfs/t1/34375/18/8599/11483/5cd51547E4fae6fc2/d943a2abc411fa4d.jpg.dpg">
    </div>
    <grid :show-lr-borders="false" :cols="5">
      <grid-item :label="i.name" v-for="(i,idx) in grid" :key="idx">
        <img slot="icon" :src="i.img">
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem } from "vux";
export default {
  data () {
    return {
      grid: [
        {
          name: "京东超市",
          img: "../src/assets/image/home/1.png.webp"
        },
        {
          name: "海囤全球",
          img: "../src/assets/image/home/2.png.webp"
        },
        {
          name: "京东服饰",
          img: "../src/assets/image/home/3.png.webp"
        },
        {
          name: "京东生鲜",
          img: "../src/assets/image/home/4.png.webp"
        },
        {
          name: "京东到家",
          img: "../src/assets/image/home/5.png.webp"
        },
        {
          name: "充值缴费",
          img: "../src/assets/image/home/6.png.webp"
        },
        {
          name: "9.9元拼",
          img: "../src/assets/image/home/7.png.webp"
        },
        {
          name: "领券",
          img: "../src/assets/image/home/8.png.webp"
        },
        {
          name: "赚钱",
          img: "../src/assets/image/home/9.png.webp"
        },
        {
          name: "全部",
          img: "../src/assets/image/home/10.png.webp"
        }
      ]
    }
  },
  components: {
    Grid,
    GridItem
  }
}
</script>

<style lang="less" scoped>
.m-grid {
  position: relative;
  .grid-list {
    .vux-indicator.vux-indicator-center {
      bottom: 1.5rem;
    }
  }
  .grid-bg {
    width: 100%;
    overflow: auto;
    position: absolute;
    min-height: 8.1rem;
    left: 0;
    right: 0;
    img {
      width: 100%;
      position: absolute;
      height: 100%;
    }
  }
  .weui-grid {
    padding: 0px 6px;
    height: 50%;
    &:before,
    &:after {
      content: "";
      border: 0;
    }
    .deep .weui-grid__label {
      padding: 100px;
    }
  }
}
.m-grid/deep/.weui-grid__icon {
    width: 2rem;
    height: 2rem;
    margin: .5rem auto .3rem;
  }

.m-grid/deep/.vux-indicator.vux-indicator-center {
    bottom: 1.5rem;
  }

.m-grid/deep/.weui-grid__label {
    font-size: .6rem !important;
    color: #666 !important;
  }
</style>
