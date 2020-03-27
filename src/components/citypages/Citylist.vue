<template>
  <div>
    <div class="citylist-header">A</div>
    <ul class="citylist-grid">
      <li class="li hidden1">阿富汗</li>
      <li class="li hidden1">阿富汗</li>
      <li class="li hidden1">阿富汗</li>
      <li class="li hidden1">阿富汗</li>
      <li class="li hidden1">阿富汗</li>
      <li class="li hidden1">阿富汗</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style  lang='scss' scoped>
.citylist-header {
  background: #dbdcdc36;
  padding: 0.3rem;
}
.citylist-grid {
  overflow: hidden;
  .li {
   box-sizing: border-box;
    line-height: 0.9rem;
    text-align: center;
    width: 25%;
    height: 0.9rem;
    float: left;
    border-bottom: 0.02rem solid #ddd;
    border-right: 0.02rem solid #ddd;
      &:nth-last-child(-n+2) {
      border-bottom: none;
    }
    &:nth-child(4n) {
      border-right: none;
    }
  }

}
</style>