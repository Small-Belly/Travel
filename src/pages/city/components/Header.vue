<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
    <div class="header-right">城市选择</div>
  </div>
</template>    
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHight;
  line-height: $headerHight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    position: absolute;
    top: 0;
    left: 0;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
      color: #fff;
    }
  }

  .header-right {
    text-align: center;
  }
}
</style>