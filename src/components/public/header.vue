<template>
    <div class="m-header" :class="scroll > 0 ? 'header-bg' : ''">
      <slot name="header-left"/>
      <slot name="header-middle"/>
      <slot name="header-right"/>
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
        }
      }
    }
</script>

<style scoped lang="less">
.m-header {
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  position: fixed;
  z-index: 300;
  background-color: transparent;
}
.header-bg {
  background-color: #e43130;
}
</style>
