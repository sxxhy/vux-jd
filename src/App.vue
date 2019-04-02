<template>
  <div id="app">
    <!--<loading v-model="isLoading"></loading>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    /*...mapState({
      isLoading: state => state.vux.isLoading
    })*/
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/close.less';
  @import '~vux/src/styles/reset.less';
  .weui-grid__icon {
    width: 2rem !important;
    height: 2rem !important;
    margin: .5rem auto .3rem !important;
  }
  .vux-indicator.vux-indicator-center {
    bottom: 1.5rem !important;
  }
  .vux-swiper {
    height: 9.15rem !important;
  }
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {
    background-size: 100% !important;
  }
  .weui-grid__label {
    font-size: .6rem !important;
    color: #666 !important;
  }
</style>
