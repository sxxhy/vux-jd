<template>
    <div class="kill-price">
      <div class="kill-price-container">
        <div class="kill-container">
          <div class="sec-kill">
            <div class="title-wrap">
              <a href="#" class="link-left">
                <div class="kill-img"></div>
                <strong class="kill-clock">14点场</strong>
                <div class="kill-time-wrap">
                  <div class="kill-time">01</div>
                  <span class="separator">:</span>
                  <div class="kill-time">41</div>
                  <span class="separator">:</span>
                  <div class="kill-time">21</div>
                </div>
              </a>
              <a href="#" class="link-right">
                更多秒杀
                <i class="icon-more"></i>
              </a>
            </div>
            <div class="kill-pro-container">
              <ul class="kill-list clearfix">
                <li class="kill-item" v-for="item of 10">
                  <div class="kill-item-img">
                    <a href="#">
                      <img src="https://img14.360buyimg.com/n1/s150x150_jfs/t1/29939/31/14816/166768/5cb698ccE3035adce/3792ecbd44fdb8cb.jpg.dpg">
                    </a>
                  </div>
                  <div class="kill-item-price">
                    <span class="new-price">
                      <em>￥</em>
                      <span>508</span>
                    </span>
                    <span class="original-price">
                      <em>￥</em>
                      <span>658</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
.kill-price {
  font-size: 0;
  width: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
    .kill-price-container {
      margin-left: .5rem;
      margin-right: .5rem;
      margin-bottom: .5rem;
      font-size: 0;
      .kill-container {
        width: 100%;
        font-size: 0;
        overflow: hidden;
        border-radius: .3rem;
        .sec-kill {
          box-shadow: 0 1px 1px #f2f2f2;
          background: #fff;
          .title-wrap {
            background: url("../../assets/image/kill_bg.png") no-repeat;
            background-size: contain;
            height: 1.7rem;
            line-height: 1.7rem;
            vertical-align: middle;
            .link-left {
              display: inline-block;
              float: left;
              .kill-img {
                float: left;
                display: inline-block;
                width: 69px;
                height: 27px;
                margin-top: 8px;
                margin-right: 6px;
                margin-left: .45rem;
                background: url("../../assets/image/home_kill_title.png") no-repeat;
                background-size: contain;
              }
              .kill-clock {
                font-size: 12px;
                color: #232326;
                font-weight: 700;
                display: inline-block;
                vertical-align: middle;
              }
              .kill-time-wrap {
                display: inline-block;
                margin: 0 0 0 6px;
                vertical-align: middle;
                .kill-time {
                  width: 18px;
                  line-height: 17px;
                  color: #232326;
                  font-size: 12px;
                  position: relative;
                  &:after {
                    border-radius: 2px;
                    height: 200%;
                    content: "";
                    width: 200%;
                    border: 1px solid #dfdfdf;
                    position: absolute;
                    top: -1px;
                    left: -1px;
                    transform: scale(.5);
                    transform-origin: left top;
                    z-index: 10;
                  }
                }
                .kill-time,.separator {
                  float: left;
                  display: inline-block;
                  line-height: 16px;
                  height: 16px;
                  font-size: 12px;
                  text-align: center;
                  color: #232326;
                }
                .separator {
                  width: 6px;
                }
              }
            }
            .link-right {
              display: inline-block;
              color: #f23030;
              float: right;
              font-size: 10px;
              text-align: right;
              position: relative;
              padding-right: 22px;
              .icon-more {
                display: inline-block;
                width: 11px;
                height: 11px;
                background: url("../../assets/image/arrow_rt.png") no-repeat;
                background-size: cover;
                position: absolute;
                right: 8px;
                top: 11px;
              }
            }
          }
          .kill-pro-container {
            overflow-x: scroll;
            width: 100%;
            font-size: 0;
            &::-webkit-scrollbar {
              display: none;
            }
            .kill-list {
              transition: all 0.3s ease 0s;
              transform: translate3d(0px, 0px, 0px);
              width: 40rem;
              position: relative;
              background-color: #fff;
              padding-left: .25rem;
              .kill-item {
                width: 4rem;
                float: left;
                .kill-item-img {
                  width: 100%;
                  padding: 0 .25rem;
                  a {
                    display: block;
                    position: relative;
                    img {
                      width: 100%;
                      height: auto;
                      overflow: hidden;
                    }
                  }
                }
                .kill-item-price {
                  margin: 0 auto;
                  text-align: center;
                  width: 100%;
                  padding: 0 .25rem;
                  em {
                    font-size: 11px;
                    font-weight: 600;
                  }
                  .new-price {
                    margin-top: 10px;
                    display: block;
                    color: #e93b3d;
                    font-size: 16px;
                    line-height: 16px;
                    height: 16px;
                    text-align: center;
                    font-weight: 600;
                  }
                  .original-price {
                    color: #999;
                    font-size: 12px;
                    line-height: 12px;
                    margin: 4px 0 11px;
                    text-align: center;
                    padding: 0 2px;
                    display: inline-block;
                    position: relative;
                    text-decoration: line-through;
                  }
                }
              }
            }
          }
        }
      }
    }
}
</style>
