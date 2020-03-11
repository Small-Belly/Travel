<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
          </ul>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
          </ul>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
          </ul>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <ul>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
            <li class="item">阿拉伯</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>    
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
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