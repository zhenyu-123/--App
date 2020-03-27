<template>
  <div>
    <headers></headers>
    <hot></hot>
    <Letter></Letter>
    <Citylist></Citylist>
  </div>
</template>

<script>
import headers from "./citypages/Header.vue";
import hot from "./citypages/Hot.vue";
import Letter from "./citypages/Letter.vue";
import Citylist from "./citypages/Citylist.vue";
export default {
  data() {
    return {};
  },
  components: {
    headers,
    hot,
    Letter,
    Citylist
  },
  mounted() {
      this.$http.get('/api/city').then((res)=>{
          console.log(res)
      })
  }
};
</script>
<style lang='scss' scoped>
</style>