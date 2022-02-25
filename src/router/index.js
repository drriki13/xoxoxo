import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home')
        },
        {
            path: '/game',
            name: 'Game',
            component: () => import('../views/Game')
        },
        {
            path: '/lobby',
            name: 'Lobby game',
            component: () => import('../views/Lobby')
        }
    ]
})
