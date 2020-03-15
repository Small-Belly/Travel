<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_640x420x95_ff0fb8f6.jpg"
      />
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
      imgs: [
        "https://img1.qunarzz.com/vs_ceph_vs_tts/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_1280x840x95_a34352bf.jpg",
        "https://img1.qunarzz.com/vs_ceph_vs_tts/73f93f46-49a2-484b-993c-3d128256e5bb.jpg_r_1280x840x95_a8fed6b2.jpg"
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

}
</style>
