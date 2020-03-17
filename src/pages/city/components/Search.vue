<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          //console.log(i); //ABC
          // 遍历当前拼音或者字的数据
          this.cities[i].forEach(value => {
            //indexOf()>-1 代表有数据
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            )
              result.push(value);
          });
        }
        //每个list 都是当前字母或城市名首字的集合
        this.list = result;
      }, 100);
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.keyword = "";
      //页面跳转----编程式跳转
      this.$router.push("/");
    },
    //把mutations映射到这个方法了
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search, {
      click: true
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.search {
  height: 0.72rem; // 36px
  padding: 0 0.3rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem; // 31px
    text-align: center;
    border-radius: 0.1rem; // 3px
    line-height: 0.62rem;
    color: #666;
    padding: 0 0.1rem;
  }
}
.search-content {
  overflow:hidden;
  position:absolute;
  z-index:99;
  top:1.58rem;
  left:0;
  right:0;
  bottom:0;
  background:#eee;

  .search-item {
    line-height:0.62rem;
    padding-left:0.2rem;
    color:#666;
  }
}
</style>
