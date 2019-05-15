<template>
    <div class="m-tabbar">
      <a href="/home">
        <div class="icon-center">
          <img src="../../assets/image/home_active.png" v-if="$route.name==='home'">
          <img src="../../assets/image/home_default.png" v-else>
        </div>
      </a>
      <a href="/category">
        <div class="icon-center">
          <img src="../../assets/image/class_active.png" v-if="$route.name==='category'">
          <img src="../../assets/image/class_default.png" v-else>
        </div>
      </a>
      <a href="/groupbuying">
        <div class="icon-center">
          <img src="../../assets/image/purchase_active.png" v-if="$route.name==='purchase'">
          <img src="../../assets/image/purchase_default.png" v-else>
        </div>
      </a>
      <a href="/cart">
        <div class="icon-center">
          <img src="../../assets/image/cart_default.png">
        </div>
      </a>
      <a href="/user">
        <div class="icon-center">
          <img src="../../assets/image/user_active.png" v-if="$route.name==='user'">
          <img src="../../assets/image/user_default.png" v-else>
        </div>
      </a>
    </div>
</template>

<script>
export default {
  created() {
  }
}
</script>

<style scoped lang="less">
.m-tabbar {
  margin: 0;
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 31;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  font-size: 16px;
  a {
    position: relative;
    width: 20%;
    height: 3em;
    box-sizing: border-box;
    float: left;
    font-size: 16px;
    background-color: transparent;
    text-align: center;
    .icon-center {
      position: absolute;
      left: 50%;
      bottom: 2px;
      width: .0625em;
      height: .0625em;
      background-color: transparent;
      z-index: 1;
      img {
        position: absolute;
        left: -2rem;
        bottom: 0;
        z-index: 1;
        width: 3.6em;
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .m-tabbar {
    a {
      height: 13.33333vw;
      .icon-center {
        font-size: 16px;
        width: .0625em;
        height: .0625em;
        img {
          left: -8vw;
          width: 16vw;
        }
      }
    }
  }
}
@media screen and (min-width: 1025px) {
  .m-tabbar {
    img {
      left: -2.93333vw !important;
    }
  }
}
</style>
