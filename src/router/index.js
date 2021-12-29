import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
    },
]

const router = new VueRouter({
    routes,
})

export default router
