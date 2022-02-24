import VueRouter from 'vue-router'

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
        }
    ]
})