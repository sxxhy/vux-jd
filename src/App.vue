<template>
  <div id="app">
    <!--<loading v-model="isLoading"></loading>-->
    <router-view/>
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
</style>
