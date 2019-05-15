<template>
    <div class="recommend floor">
      <div class="fls-tit">
        <div class="floor-tit-img">
          <span class="tit-img">
            <img src="../../assets/image/home/recommend.png">
          </span>
        </div>
      </div>
      <div class="floor-container-bottom clearfix">
        <ul class="list">
          <li class="item" v-for="item of 60">
            <a href="#">
              <div class="info">
                <div class="img">
                  <img src="https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/30813/15/2669/113856/5c6d2599Eb71894a2/1a18111a7a009218.jpg!q70.dpg">
                </div>
                <span class="text">
                  <img src="https://img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png">
                  石头（roborock）扫地机器人 2019新款T6扫拖一体机 激光导航规划全自动智能家用吸尘器 T60
                </span>
                <p class="pro-info">
                  <span class="pro-price">
                    <span class="price">2799</span>
                  </span>
                  <span class="tag">新品</span>
                  <span class="guess-button">
                    看相似
                  </span>
                </p>
                <p class="pro-info">
                  <span class="plus-price">
                    ￥ 69
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
.recommend {
  .floor-container-bottom {
    border-bottom: 1px solid #f5f5f5;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
    margin: 0 .5rem .5rem;
    .list {
      .item {
        float: left;
        width: 50%;
        box-sizing: border-box;
        padding-bottom: 4px;
        position: relative;
        &:nth-child(2n+1) {
          padding-right: 2px;
        }
        .info {
          background-color: #fff;
          .img {
            position: relative;
            text-align: center;
            img {
              opacity: 1;
              width: 8rem;
              height: 8rem;
              transition: opacity .3s ease-in;
            }
          }
          .text {
            box-sizing: border-box;
            height: 1.6rem;
            font-size: 0.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-word;
            color: #232326;
            margin-top: 5px;
            line-height: 0.8rem;
            margin-bottom: 3px;
            padding: 0 0.4rem;
            img {
              opacity: 1;
              width: auto;
              height: 0.55rem;
              display: inline-block;
              position: relative;
              top: 0;
              margin-right: 4px;
              line-height: 13px;
              transition: opacity .5s ease-in;
            }
          }
          .pro-info {
            position: relative;
            height: 1rem;
            box-sizing: border-box;
            font-size: 0.6rem;
            overflow: hidden;
            padding: 0 0.4rem;
            .pro-price {
              color: #f23030;
              display: inline-block;
              padding: 0 5px 0 4px;
              position: relative;
              top: 1px;
              height: 1rem;
              line-height: 1rem;
              .price {
                font-size: 0.7rem;
              }
            }
            .tag {
              border: 1px solid #e4393c;
              color: #e4393c;
              font-size: 0.5rem;
              padding: 0 3px;
              margin-right: 5px;
            }
            .guess-button {
              display: block;
              position: absolute;
              top: 0.1rem;
              right: 0.4rem;
              text-align: center;
              color: #686868;
              font-size: 0.5rem;
              width: 2rem;
              height: 0.85rem;
              line-height: 0.85rem;
              &:after {
                content: "";
                width: 200%;
                height: 200%;
                position: absolute;
                top: 0;
                left: 0;
                border: 1px solid #bfbfbf;
                border-radius: 4px;
                -webkit-transform: scale(.5,.5);
                transform: scale(.5,.5);
                -webkit-transform-origin: top left;
                transform-origin: top left;
              }
            }
            .plus-price {
              display: inline-block;
              height: 1rem;
              outline: 1rem;
              position: relative;
              font-size: 0.5rem;
              padding-left: 4px;
              vertical-align: middle;
              color: #232326;
              &:after {
                content: "";
                height: 0.4rem;
                width: 0.8rem;
                position: absolute;
                top: 0.1rem;
                right: -1rem;
                background: url("../../assets/image/home/plus.png");
                -webkit-background-size: 28px 9px;
                background-size: 0.8rem 0.4rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
