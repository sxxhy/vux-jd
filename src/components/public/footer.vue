<template>
    <div class="m-footer">
      <ul class="link-list clearfix">
        <li>
          <a href="">登录</a>
        </li>
        <li>
          <a href="">注册</a>
        </li>
        <li>
          <a href="">客户服务</a>
        </li>
        <li>
          <a href="javascript:;" @click="toTop">返回顶部</a>
        </li>
      </ul>
      <ul class="icon-list clearfix">
        <li>
          <a href="">
            <img src="../../assets/image/client-side.png">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../assets/image/international-edition.png">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../../assets/image/PC-Edition.png">
          </a>
        </li>
      </ul>
      <div class="common-copyright">Copyright © 2004-2018 京东JD.com 版权所有</div>
      <a href="javascript:;" class="to-top" v-show="scroll > 500" @click="toTop"></a>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          scroll: 0
        }
      },
      mounted () {
        window.addEventListener('scroll', this.scrollTop);
      },
      methods: {
        scrollTop () {
          this.scroll = document.documentElement.scrollTop;
        },
        toTop () {
          document.documentElement.scrollTop = 0;
        }
      }
    }
</script>

<style scoped lang="less">
.m-footer {
  padding-bottom: 54px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  .link-list {
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    padding: 4.26667vw 5.33333vw;
    li {
      float: left;
      text-align: center;
      width: 25%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 5px;
      box-sizing: border-box;
      &:nth-child(-n+3) {
        a {
          &:after {
            content: "";
            display: inline-block;
            height: 70%;
            width: 1px;
            background-color: #d7d7d7;
            position: absolute;
            right: 0;
            top: 15%;
          }
        }
      }
      a {
        position: relative;
        display: block;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #848689;
        font-size: 3.73333vw;
        padding-top: 3px;
      }
    }
  }
  .icon-list {
    border-bottom: 1px solid #e5e5e5;
    padding: 1.06667vw 2vw;
    li {
      float: left;
      text-align: center;
      width: 33.3333%;
      a {
        display: block;
        width: 100%;
        position: relative;
        img {
          width: 16vw;
          vertical-align: middle;
        }
      }
    }
  }
  .common-copyright {
    text-align: center;
    color: #848689;
    font-size: 1.86667vw;
    padding: 2vw 0;
  }
  .to-top {
    position: fixed;
    bottom: 80px;
    right: 9px;
    width: 38px;
    height: 38px;
    background-image: url('../../assets/image/to-top.png');
    background-size: 38px 38px;
    background-repeat: no-repeat;
    background-position: 50%;
    z-index: 20;
  }
}
@media screen and (min-width: 641px) {
  .m-footer {
    .link-list {
      padding: 8px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      li a {
          font-size: 28px;
      }
    }
    .icon-list img {
      width: 160px !important;
    }
    .common-copyright {
      font-size: 16px;
      padding: 15px 0;
    }
  }
}
</style>
