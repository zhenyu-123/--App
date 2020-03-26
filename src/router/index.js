import Vue from 'vue'
import router from 'vue-router'
import home from '@/components/Home.vue'
import city from '@/components/City.vue'
Vue.use(router);
export default new router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        }
        ,
        {
            path: "/city",
            name: "city",
            component: city
        }

    ],
    mode: "hash"
})
