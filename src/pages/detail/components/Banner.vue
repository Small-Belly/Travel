<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <swiper :options="swiperOption" v-if="bannerImgs.length">
        <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
          <img class="banner-img" :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="txt">
        <div class="id">
          <span class="tit">{{ sightName }}</span>
          <span>0001</span>
        </div>
        <div class="num">
          {{ this.bannerImgs.length }}
          <div class="iconfont banner-icon">&#xe609;</div>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        @close="handleGallaryClose"
        :imgs="gallaryImgs"
        v-show="showGallary"
      ></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";

export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  data() {
    return {
      showGallary: false,
      swiperOption: {
        loop: true,
        autoplay: 3000,
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        //监听变化,自动刷新
        observeParents: true,
        observer: true
      }
    };
  },
  props: {
    sightName: String,
    bannerImgs: Array,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner >>> .swiper-container {
    overflow:inherit;
}
.banner{
  position:relative;
  overflow:hidden;
  height :0;
  padding-bottom:66.66%;

  .banner-img{
    display:block;
    width:100%;
  }

  .txt {
    display:flex;
    box-sizing:border-box;
    justify-content:space-between;
    align-content:space-between;
    position:absolute;
    width:100%;
    height:.8rem;
    line-height:.8rem;
    bottom:0px;
    z-index:99;
    color:#fff;
    background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,0.8) 85%);
    transform: translateZ(0);
    padding:0 .2rem;

    .tit{
      padding-right:0.2rem;
      font-size:.32rem;
    }

    .num {
      font-size:.24rem

      .banner-icon {
        display:inline-block;
      }
    }
  }
  // .swiper-container{
  //   display:inline-block;
  //   bottom:0;
  //   color:#fff;
  // }
}
</style>
