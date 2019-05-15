<template>
    <div class="daily-stroll floor">
      <div class="fls-tit">
        <div class="floor-tit-img">
          <span class="tit-img">
            <img src="../../assets/image/home/every.jpg">
          </span>
        </div>
      </div>
      <div class="floor-container-bottom clearfix">
        <div class="item" v-for="(imte,index) of 8">
          <a href="#">
            <div class="real-show">
              <div class="graphic-text">
                <strong class="graphic-tit" :class="`gradient${index}`">休闲春光</strong>
                <p class="graphic-wz">广场生活</p>
              </div>
              <div class="graphic-img">
                <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t23233/299/1493167730/232149/f059623a/5b612e00N576c1901.jpg!q70.jpg.dpg">
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.daily-stroll {
  .floor-container-bottom {
    border-bottom: 1px solid #f5f5f5;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    margin: 0 .5rem .5rem;
    .item {
      height: 6rem;
      background: #fff;
      font-size: 100%;
      overflow: hidden;
      position: relative;
      width: 25%;
      float: left;
      .real-show {
        padding: .325rem 0 .25rem .5rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        .graphic-text {
          height: 1.9rem;
          width: 100%;
          padding: 0;
          float: none;
          overflow: hidden;
          .graphic-tit {
            color: rgb(0, 0, 0);
            letter-spacing: .58px;
            font-weight: 700;
            font-size: .8rem;
            line-height: 1.125rem;
            display: inline-block;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .graphic-wz {
            color: #666771;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: .6rem;
            line-height: .825rem;
            height: .75rem;
          }
        }
        .graphic-img {
          width: 3.25rem;
          height: 3.25rem;
          margin: .275rem .2rem 0;
          img {
            overflow: hidden;
            text-align: center;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

</style>
