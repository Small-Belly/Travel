<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <a href="javascript:;" class="item-link">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <div class="item-price">
              <span>
                <em>￥</em>
              </span>
              <span>
                <em>{{ item.price }}</em>
                <span class="unit">起</span>
              </span>
            </div>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  }
  /* data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: require("img/313147f7-677f-44bf-a091-6999b113e76e.jpg_r_480x320x90_7355c6cf.jpg"),
          title: "珠海-澳门 1天跟团游",
          desc:
            "珠海出发：澳门大三巴+银河酒店+运财水钻+妈祖阁+威尼斯人度假村纯玩一日游",
          price: "188"
        },
        {
          id: "0002",
          imgUrl: require("img/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_480x320x90_452da5f5.jpg"),
          title: "深圳-澳门 2天跟团游",
          desc:
            "香港澳门2日游天星小轮游维港，钟楼赏灯光秀，威尼斯人探秘澳门风云，港珠澳大桥",
          price: "738"
        },
        {
          id: "0003",
          imgUrl: require("img/3a949058-1b27-4c64-9339-bf8f0f57731c.jpg_r_480x320x90_1b709305.jpg"),
          title: "深圳-澳门 2天跟团游",
          desc:
            "春节🔥澳门旅游过大年🔥澳门一日游特惠团|嗨玩威尼斯人度假村，大三巴牌坊",
          price: "178"
        },
        {
          id: "0004",
          imgUrl: require("img/c4d16438-1809-4ee3-8195-4fbe9ce0118a.jpg_r_480x320x90_f19dc468.jpg"),
          title: "深圳-迪拜 6天跟团游",
          desc:
            "玩转迪拜海陆空！6天不购物！游艇出海+沙漠冲沙+登高塔或金相框+全程国际五星",
          price: "6999"
        }
      ]
    };
  } */
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem; // 20px
  background: #cccccc30;
  text-indent: 0.2rem;
  font-size: 0.32rem;
}

.item {
  .item-link {
    display: block;
    display: flex;
    overflow: hidden;
    height: 0;
    padding-bottom: 24%;

    .item-img {
      width: 1.8rem;
      height: 1.4rem;
      padding: 0.1rem;
      border-radius: 0.2rem 0 0 0.2rem;
    }

    .item-info {
      flex: 1;
      margin: 0.1rem;
      min-width: 0;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem; // 16px
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
