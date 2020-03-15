<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImgs="bannerImgs"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-list :list="list"></detail-list>

    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo() {
      axios
        .get("./api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetSucc);
    },
    handleGetSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // console.log(data);
        this.sightName = data.sightName;
        this.bannerImgs = data.bannerImgs;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  data() {
    return {
      sightName: "",
      bannerImgs: [],
      gallaryImgs: [],
      categoryList: [],
      list: []
    };
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height:50rem;
}
</style>
