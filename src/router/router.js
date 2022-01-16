import Vue from "vue"
import VueRouter from "vue-router"
import FavoritePage from '@/views/FavoritePage'
import HomePage from '@/views/HomePage'
import WatchPage from '@/views/WatchPage'


const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
            component: HomePage
        },
        {
            path: "/home",
            component: HomePage
        },
        {
            path: "/favorites/:userid",
            component: FavoritePage
        },
        {
            path: "/watch",
            component: WatchPage
        },
    ]
})

Vue.use(VueRouter)

export default router;