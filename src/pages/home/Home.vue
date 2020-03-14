<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-strategy :strategyList="strategyList"></home-strategy>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend"; //热销
import HomeStrategy from "./components/Strategy"; //周末游
import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeStrategy
  },
  data() {
    return {
      // city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      strategyList: []
    };
  },
  methods: {
    getHomeInfo() {
      //请求数据,数据获取成功后执行
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      //如果后端返回了结果,且有data 的内容项
      if (res.ret && res.data) {
        const data = res.data;
        // this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.strategyList = data.strategyList;
      }
    }
  },
  mounted() {
    //页面挂载好后执行函数
    this.getHomeInfo();
  }
};
</script>  

<style scoped>
</style>