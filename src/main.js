import Vue from 'vue'
import App from './App.vue'
import router from './router'
//css
// import 'u-reset';
import './assets/css/u-reset.css'
import './assets/css/iconfont.css'
//js
import fastclick from 'fastclick'
fastclick.attach(document.body);

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
