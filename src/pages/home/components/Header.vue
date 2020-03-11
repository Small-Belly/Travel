<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe61f;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>  

<style lang="stylus" scoped>
@import '~styles/varibles';

.header {
  display: flex;
  height: $headerHight;
  line-height: $headerHight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    position: relative;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.12rem;
    background: #fff;
    border-radius: 0.1rem; /* 5px */

    span {
      color: #ccc;
    }

    input {
      position: absolute;
      width: 80%;
      height: 0.64rem;
      line-height: 0.64rem;
      left: 0.5rem;
      border-radius: 0.1rem; /* 5px */
      color: #ccc;
    }
  }

  .header-right {
    float: right;
    width: 1.24rem;
    height: 0.86rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;

    .arrow-icon {
      margin-left: -0.06rem;
      font-size: 0.24rem;
    }
  }
}
</style>