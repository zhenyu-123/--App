import Vue from 'vue'
import router from 'vue-router'
import home from '@/components/Home.vue'

Vue.use(router);
export default new router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        }

    ],
    mode: "history"
})
