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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
