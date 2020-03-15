<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet", //字母组件
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  methods: {
    handleLetterClick(event) {
      //event事件对象
      //target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
      // console.log(event.target.innerText);
      //向外触发事件
      const text = event.target.innerText;
      this.$emit("change", text);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(even) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          //第一个手指所在的位置与顶部下沿的距离
          const touchY = even.touches[0].clientY - 79;
          //对应字母的下标
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 10);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  //页面数据被更新,页面完成渲染才被执行
  updated() {
    //首字母到顶部
    this.startY = this.$refs["A"][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters; //["A","B","C"]
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.5rem;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
