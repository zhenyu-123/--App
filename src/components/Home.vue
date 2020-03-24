<template>
  <div>
    <headers></headers>
    <swiper></swiper>
    <Icons></Icons>
    <Location></Location>
    <Hot></Hot>
    <like></like>
    <vacation></vacation>
  </div>
</template>
<script lang="ts">
import headers from "./pages/header.vue";
import swiper from "./pages/Swiper.vue";
import Icons from "./pages/Icons.vue";
import Location from "./pages/Location.vue";
import Hot from './pages/Hot.vue'
import like from "./pages/Like.vue";
import vacation from "./pages/Vacation.vue"
export default {
  data() {
    return {};
  },
  components: {
    headers,
    swiper,
    Icons,
    Location,
    Hot,
    like,
    vacation
  }
};
</script>