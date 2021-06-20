import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import LoginRegister from "../views/LoginRegister";
import Forget from "../views/Forget";
import Dashboard from "../views/Dashboard";
import Rows from "../components/Appointment"
import add from "../components/add"
import update from "../components/update"


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
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children:[
            {
                name:'appointment',
                path:'/dashboard',
                component:Rows
            },
            {
                name:'add',
                path:'/dashboard/add',
                component:add
            },
            {
                name:'update',
                path:'/dashboard/update/:id_record',
                component:update
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
