<template>
  <div>
    <div class="hot">
      <div class="hot-title">热门城市</div>
      <ul class="hot-list">
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
        <li class="hot-li">北京</li>
      </ul>
      <div class="hot-title">热门城市</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.hot-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
  background: #dbdcdc36;
}
.hot-list::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 33.33%;
  left: 33.33%;
  border-right: solid #ddd 0.02rem;
  border-left: solid #ddd 0.02rem;
}
.hot-list {
  overflow: hidden;
  position: relative;
  .hot-li {
    float: left;
    width: 33.33%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: solid #ddd 0.02rem;
  }
}
  .hot-list .hot-li:nth-last-child(-n+3){
  border-bottom: solid #fff 0.02rem !important;
}
</style>