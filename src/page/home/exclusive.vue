<template>
  <!-- 专属列表 -->
    <div class="exclusive-wrap">
      <div class="gift vux-1px-r">
        <a href="#">
          <img
            src="https://m.360buyimg.com/mobilecms/jfs/t1/24056/17/2005/80908/5c186655E14dc7cf2/820a7029a2540e25.jpg!q70.jpg.dpg"
            alt
          >
        </a>
      </div>
      <div class="channel vux-1px-r">
        <a href="#">
          <img
            src="https://m.360buyimg.com/mobilecms/jfs/t1/26685/26/1930/47992/5c186663Ee07857b2/533b3a90ad7aa17b.jpg!q70.jpg.dpg"
            alt
          >
        </a>
      </div>
      <div class="exclusive vux-1px-r">
        <a href="#">
          <img
            src="https://m.360buyimg.com/mobilecms/jfs/t1/18133/22/6850/53621/5c63f35bE724cd222/c62f916947c69035.jpg!q70.jpg.dpg"
            alt
          >
        </a>
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.exclusive-wrap {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  height: 6rem;
  background-color: #f5f5f5;
  .gift {
    width: 50%;
  }
  .channel,.exclusive {
    width: 25%;
  }
  .gift,.channel,.exclusive {
    height: 6rem;
    float: left;
    a {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

