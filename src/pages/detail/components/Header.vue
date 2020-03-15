<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </div>
      </router-link>
      <div class="header-right">景点选择</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetallHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    //页面展示时绑定
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    //页面消失时取消绑定
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.header {
  .header-abs {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    line-height: 0.72rem;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    text-align: center;
    .header-abs-back{
      color: #fff;
      font-size: 0.4rem;
    }
  }

  .header-fixed {
      position:fixed;
      top:0;
      left:0;
      right:0;
      height: $headerHight;
      line-height: $headerHight;
      background: $bgColor;
      color: #fff;
      z-index:100;

    .header-left {
      width: 0.64rem;
      position: absolute;
      top: 0;
      left: .1rem;

      .header-fixed-back {
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
      }
    }

    .header-right {
      text-align: center;
    }
  }
}
</style>
