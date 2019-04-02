<template>
  <div class="m-home">
    <!--头部-->
    <m-header>
      <x-icon slot="header-left"
              type="navicon"
              size="40"
              style="fill:#fff"
              class="menu"></x-icon>
      <div class="search"
           slot="header-middle">
        <i class="logo"></i>
        <i class="search-icon"></i>
        <input type="text"
               class="search-text"
               :placeholder="searchTip">
      </div>
      <div class="login"
           slot="header-right">
        <a href="/login">登录</a>
      </div>
    </m-header>
    <swiper style="width:100%;height: 9.15rem;position: relative;"
            dots-position="center"
            :list="swiperList"
            :loop="true">
    </swiper>
    <grid :show-lr-borders="false"
          :cols="5"
          style="height: 8.1rem;position: relative;margin-top: -1.4rem;z-index: 200;
                  border-radius: .5rem .5rem 0 0;overflow: hidden;background-color:#fff;">
      <grid-item :label="i.name"
                 v-for="(i,idx) in grid"
                 :key="idx">
        <img slot="icon"
             :src="i.img">
      </grid-item>
    </grid>

    <form action="/finishOrder" method="post" id="payment-form">
      <div class="form-row">
        <label for="card-element">
          填写信用卡信息
        </label>
        <div id="card-element">
          <!-- A Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors. -->
        <div id="card-errors" role="alert"></div>
      </div>

      <button>确认支付</button>
    </form>
  </div>
</template>

<script>
  import MHeader from '../../components/public/header'
  import { Swiper, Grid, GridItem } from 'vux'
  export default {
    data () {
      return {
        swiperList: [{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21880/19/12397/299532/5c98fc1dE76e85e5d/47bc267c8746bc84.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/11334/39/13475/335042/5c99e87dE4bbd5d6f/f2899f14023d2ee9.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/11487/25/13492/135811/5c99f021E953057c8/cb9df58e993aa67c.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t29125/291/196144431/104491/4634ac51/5beaa8f2N40122d10.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23822/18/11243/96258/5c8f11b1Eb1de93be/3173ed124262cc96.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/20183/35/12774/64329/5c9b87c8E515c6640/0d61329203237b09.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        },{
          url: 'javascript',
          img: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27489/35/11737/53398/5c93d696E04f28213/9ffe06aa7cfe8c61.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        }],
        searchTip: '厨房置家物',
        grid: [{
          name: '京东超市',
          img: '../src/assets/image/home/1.png.webp'
        },{
          name: '海囤全球',
          img: '../src/assets/image/home/2.png.webp'
        },{
          name: '京东服饰',
          img: '../src/assets/image/home/3.png.webp'
        },{
          name: '京东生鲜',
          img: '../src/assets/image/home/4.png.webp'
        },{
          name: '京东到家',
          img: '../src/assets/image/home/5.png.webp'
        },{
          name: '充值缴费',
          img: '../src/assets/image/home/6.png.webp'
        },{
          name: '9.9元拼',
          img: '../src/assets/image/home/7.png.webp'
        },{
          name: '领券',
          img: '../src/assets/image/home/8.png.webp'
        },{
          name: '赚钱',
          img: '../src/assets/image/home/9.png.webp'
        },{
          name: '全部',
          img: '../src/assets/image/home/10.png.webp'
        }]
      }
    },
    components: {
      MHeader,
      Swiper,
      Grid,
      GridItem
    },
    mounted () {
      var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
      var elements = stripe.elements();
      var style = {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }
      var card = elements.create('card', {style: style});
      card.mount('#card-element');
      card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });
      var form = document.getElementById('payment-form');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
          } else {
            stripeTokenHandler(result.token);
          }
        });
      });
      function stripeTokenHandler(token) {
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);
        form.submit();
      }
    }
  }
</script>

<style scoped lang="less">
.m-home {
  .menu {
    width: 15%;
  }
  .search {
    width: 70%;
    height: 30px;
    display: flex;
    /*justify-content: flex-start;*/
    border-radius: 15px;
    flex: 1;
    background: #f7f7f7;
    i {
      display: block;
      position: relative;
    }
    .logo {
      width: 28px;
      height: 15px;
      background: url('../../assets/image/home/logo.png') no-repeat;
      background-size: 20px 15px;
      margin: 8px 8px 0 15px;
      &:after {
        content: "";
        position: absolute;
        border-right: 1px solid #ddd;
        top: 0;
        left: 26px;
        height: 16px;
      }
    }
    .search-icon {
      width: 18px;
      height: 15px;
      background: url('../../assets/image/home/jd-sprites.png') no-repeat;
      background-position: -84px 0;
      background-size: 200px;
      margin: 8px 0 0 15px;
    }
    .search-text {
      width: 100%;
      border: 0;
      color: #232326;
      height: auto;
      outline: none;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: middle;
      padding-left: 5px;
      font-size: 12px;
      margin: 0 0 0 5px;
      background-color: transparent;
    }
  }
  .login {
    width: 15%;
    text-align: center;
    a {
      color: #fff;
      font-size: 16px;
    }
  }
  .grid-list {
    .vux-indicator.vux-indicator-center {
      bottom: 1.5rem;
    }
  }
  .weui-grid {
    padding: 7px 6px;
    height: 50%;
    &:before,&:after {
      content: '';
      border: 0;
    }
    .deep .weui-grid__label{
      padding: 100px;
    }
  }
}


.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
