<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <ul>
            <li
              class="item"
              @click="handleCityClick(innerItem.name)"
              v-for="innerItem of item"
              :key="innerItem.id"
            >
              {{ innerItem.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    //定义接收的数据类型
    letter: String
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    //把mutations映射到这个方法了
    ...mapMutations(["changeCity"])
  },
  computed: {
    //vuex city公共数据 映射到公共属性里
    ...mapState({
      //映射名字
      currentCity: "city"
    })
  },
  watch: {
    letter() {
      // console.log(this.letter);
      if (this.letter) {
        //每个this.letter 都是被点击的字母
        // console.log(this.letter);
        //因为是循环创建的li,$refs
        //console.log(this.$refs); //A: Array [ div.area ]~~~
        //console.log(this.$refs[this.letter][0]) 得到DOM
        const element = this.$refs[this.letter][0];
        // console.log(element);
        this.scroll.scrollToElement(element);
      }
    }
  },
  //挂载完毕后完成
  mounted() {
    //创建实例属性
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem; // 0.72+0.86
  left: 0;
  bottom: 0;
  right: 0;

  .title {
    height: 0.52rem;
    line-height: 0.52rem; // 26px
    background: $bgTitle;
    padding-left: 0.2rem;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      height: 0.76rem;
      padding-left: 0.2rem;
      border-bottom: 0.02rem solid #ccc;
      line-height: 0.76rem;
      font-size: 0.26rem;
      color: #333;
    }
  }
}
</style>
