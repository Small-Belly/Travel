<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>    
<script>
export default {
  name: "CitySearch"
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
</style>