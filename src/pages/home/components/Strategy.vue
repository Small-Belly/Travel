<template>
  <div>
    <div class="title">旅行攻略</div>
    <ul class="li-wrapper">
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <a href="javascript:;" class="item-link">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <!-- <div class="item-price">
              <span>
                <em>￥</em>
              </span>
              <span>
                <em>{{item.price}}</em>
                <span class="unit">起</span>
              </span>
            </div>-->
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeStrategy",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: require("img/5a11974656794b4715156501be10c1b7.jpg"),
          title: "厦门，带娃出行与幸福同行"
        },
        {
          id: "0002",
          imgUrl: require("img/7d9b233c71cad13ded0013f9c9cec635.jpg"),
          title: "驾一叶扁舟，寻瓯江往事"
        },
        {
          id: "0003",
          imgUrl: require("img/fd16ccffb2e2376ff370bda3bebebd71.jpg"),
          title: "不负嵊夏好时光，泗乎太安逸"
        },
        {
          id: "0004",
          imgUrl: require("img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg"),
          title: "探访日本，一部家庭旅行画册"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem; // 20px
  background: #cccccc30;
  text-indent: 0.2rem;
  font-size: 0.32rem;
}

.li-wrapper {
  padding: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.28rem;

  .item {
    width: 49%;

    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 60%;

      .item-img {
        width: 100%;
      }
    }

    .item-info {
      flex: 1;
      margin: 0.1rem;
      min-width: 0;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.28rem; // 14px
      }

      .item-desc {
        color: #555555;
        line-height: 0.4rem;
        font-size: 0.28rem;
        ellipsis();
        margin-top: 0.1rem;
      }

      .item-price {
        line-height: 0.44rem;
        color: #ff7400;
        margin-top: 0.1rem;

        em {
          font-size: 0.38rem;
        }
      }
    }
  }
}
</style>