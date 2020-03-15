<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon">★</span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
.item{
    .item-title-icon {
        display:inline-block;
        color:#17c0c8;
        width:.36rem;
        height:.8rem;
        text-align:center;
        margin-right:-0.1rem
    }
    .item-title{
        line-height:.8rem;
        font-size:.32rem;
        padding: 0 .1rem;
    }
    .item-children{
        padding:0 .2rem
    }

}
</style>
