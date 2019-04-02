<template>
    <div class="m-header">
      <slot name="header-left"/>
      <slot name="header-middle"/>
      <slot name="header-right"/>
    </div>
</template>

<script>
    export default {

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
  z-index: 100;
  background-color: transparent;
}
</style>
