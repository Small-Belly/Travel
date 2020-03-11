<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true, //支持循环轮播
        autoplay: 2000
      } /* ,
      swiperList: [
        //循环播放
        {
          id: "0001",
          imgUrl: require("img/banner_1.png")
        },
        {
          id: "0002",
          imgUrl: require("img/banner_1.png")
        },
        {
          id: "0003",
          imgUrl: require("img/banner_1.png")
        }
      ] */
    };
  },
  computed: {
    //防止一进去是最后一张
    showSwiper() {
      return this.swiperList.length;
    }
  },
  props: {
    swiperList: Array
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 33.85%; // height/width
  background: #ccc;

  .swiper-item {
    width: 100%;
  }

  .swiper-img {
    width: 100%;
  }
}
</style>