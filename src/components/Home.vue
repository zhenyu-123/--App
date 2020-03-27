<template>
  <div>
    <!-- <picker></picker> -->
    <headers></headers>
    <swiper :banners='banners'></swiper>
    <Icons :iconlist='iconlist'></Icons>
    <Location ></Location>
    <Hot :list='list'></Hot>
    <like :likelist='likelist'></like>
    <vacation :vacationlist='vacationlist'></vacation>
  </div>
</template>
<script lang="ts">
import headers from "./pages/header.vue";
import swiper from "./pages/Swiper.vue";
import Icons from "./pages/Icons.vue";
import Location from "./pages/Location.vue";
import Hot from "./pages/Hot.vue";
import like from "./pages/Like.vue";
import vacation from "./pages/Vacation.vue";
// import picker from './demo/picker.vue'
export default {
  data(){
    return{
      banners:[],
      iconlist:[],
      vacationlist:[],
      list:[],
      likelist:[]
    }
  },
  mounted() {
    this.$http
      .get("/api/datahome")
      .then(res => {
        this.banners=res.data.data.banners
        this.iconlist=res.data.data.iconlist
        this.vacationlist=res.data.data.vacationlist
        this.list=res.data.data.list
        this.likelist=res.data.data.likelist
        
      })
      .catch(err => {
        console.log( err);
      });
  },
  components: {
    headers,
    swiper,
    Icons,
    Location,
    Hot,
    like,
    vacation
    // picker
  }
};
</script>