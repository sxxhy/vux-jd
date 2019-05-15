<template>
  <div class="floor floor-courtyard">
    <div class="fls-tit">
      <div class="floor-tit-img">
        <span class="tit-img">
          <img src="../../assets/image/home_dongjia.jpg">
        </span>
      </div>
    </div>
    <div class="floor-container">
      <div class="floor-container-top">
        <div class="fls-pit">
          <div class="floor-graphic-item">
            <div class="top-left" v-for="item of 2">
              <div class="real-show">
                <div class="graphic-text">
                  <span class="graphic-tit">我的大学</span>
                  <p class="graphic-wz">全新生活从这里开启</p>
                </div>
                <div class="graphic-img">
                  <a href="#">
                    <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/22451/28/12710/368712/5c98cb73Ed43393bd/7e45d0bb0b33f566.jpg!q70.jpg.dpg">
                  </a>
                  <a href="#">
                    <img src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/25813/29/12657/304911/5c98c8e2E6bcf7d2d/25342f237b56fe97.jpg!q70.jpg.dpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floor-container-bottom clearfix">
        <div class="item" v-for="imte of 4">
          <a href="#">
            <div class="real-show">
              <div class="graphic-text">
                <strong class="graphic-tit">休闲春光</strong>
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
  </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
.floor-courtyard {
  .floor-container {
    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    font-size: 0;
    .floor-container-top {
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
      border-bottom: 1px solid #f5f5f5;
      width: 100%;
      font-size: 0;
      overflow: hidden;
      .fls-pit {
        height: 6rem;
        .floor-graphic-item {
          width: 100%;
          background: #fff;
          font-size: 100%;
          overflow: hidden;
          height: 100%;
          .top-left {
            border-right: 1px solid #f5f5f5;
            background: #fff;
            position: relative;
            font-family: PingFangSC-Light,PingFang-Medium,PingFangSC-Regular,Helvetica,Droid Sans,Arial,sans-serif;
            font-size: 0;
            width: 50%;
            height: 6rem;
            float: left;
            .real-show {
              padding: .325rem 0 .25rem;
              width: 100%;
              height: 100%;
              overflow: hidden;
              position: absolute;
              left: 0;
              top: 0;
              .graphic-text {
                height: 1.9rem;
                width: 100%;
                overflow: initial;
                position: relative;
                float: left;
                padding: 0 0 0 .45rem;
                z-index: 2;
                .graphic-tit {
                  background: linear-gradient(90deg, #45CAFF,#1471FB);
                  color: transparent;
                  font-weight: 700;
                  font-size: .8rem;
                  line-height: 1.125rem;
                  display: inline-block;
                  max-width: 100%;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  -webkit-background-clip: text;
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
                padding: 0 .7rem;
                clear: both;
                width: 100%;
                height: 3.25rem;
                margin-right: .25rem;
                a {
                  img {
                    width: 3rem;
                    height: 3rem;
                    float: left;
                    margin: .275rem .35rem 0;
                    overflow: hidden;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
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
}
</style>
