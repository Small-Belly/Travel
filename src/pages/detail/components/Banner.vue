<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="banner-img" :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="txt">
        <div class="id">
          <span class="tit">产品编号</span>
          <span>805434166</span>
        </div>
        <div class="num">
          2/10
          <div class="iconfont banner-icon">&#xe609;</div>
        </div>
      </div>
    </div>
    <common-gallary
      @close="handleGallaryClose"
      :imgs="imgs"
      v-show="showGallary"
    ></common-gallary>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
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
      },
      imgs: [
        "https://img1.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_1280x840x95_a34352bf.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/73f93f46-49a2-484b-993c-3d128256e5bb.jpg_r_1280x840x95_a8fed6b2.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/700ef324-e4a4-431f-9c07-f32476c8e631.jpg_r_640x420x95_70a8b25a.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/8177916d-9b0a-4da7-b5d6-f2a5077ea78e.jpg_r_640x420x95_fd2407e7.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/bf0e6371-7085-406f-9ea5-d215f64eba99.jpg_r_640x420x95_2db32056.jpg",
        "https://img1.qunarzz.com/p/tts5/1705/46/062b56ad1351a202.jpg_r_640x420x95_95979774.jpg"
      ]
    };
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
