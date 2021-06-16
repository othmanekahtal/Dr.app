import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import LoginRegister from "../views/LoginRegister";
import Forget from "../views/Forget";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'LoginRegister',
        component: LoginRegister
    },
    {
        path: '/forget',
        name: 'forget',
        component: Forget
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
