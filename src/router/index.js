import {createRouter, createWebHistory} from 'vue-router'
import Forget from "../views/Forget";
import Rows from "../components/Appointment"
import add from "../components/add"
import update from "../components/update"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "login_register" */ '../views/LoginRegister.vue'),
        beforeEnter(to, from, next) {
            const token = localStorage.getItem('token') || false;
            if (!token) {
                next();
            } else {
                const headers = new Headers();
                headers.append('authorization', token);
                const requestOptions = {
                    method: 'GET',
                    headers: headers,
                };

                fetch("http://localhost/back-end/Auth/verify", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result == null) {
                            next();
                        } else {
                            next({name: 'dashboard'});
                        }
                    })
            }
        }
    },
    {
        path: '/login',
        name: 'LoginRegister',
        component: () => import(/* webpackChunkName: "login_register" */ '../views/LoginRegister'),
        beforeEnter(to, from, next) {
            const token = localStorage.getItem('token') || false;
            if (!token) {
                next();
            } else {
                const headers = new Headers();
                headers.append('authorization', token);
                const requestOptions = {
                    method: 'GET',
                    headers: headers,
                };

                fetch("http://localhost/back-end/Auth/verify", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result == null) {
                            next();
                        } else {
                            next({name: 'dashboard'});
                        }
                    })
            }
        }

    },
    {
        path: '/forget',
        name: 'forget',
        component: Forget
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "login_register" */ '../views/Dashboard.vue'),

        beforeEnter(to, from, next) {
            const token = localStorage.getItem('token') || false;
            if (token) {
                const headers = new Headers();
                headers.append('authorization', token);
                const requestOptions = {
                    method: 'GET',
                    headers: headers,
                };
                fetch("http://localhost/back-end/Auth/verify", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (!result.error) {
                            next();
                        } else {
                            next({name: 'LoginRegister'});
                        }
                    })
            } else {
                next({name: 'LoginRegister'});
            }
        },
        children: [
            {
                name: 'appointment',
                path: '/dashboard/appointment',
                component: Rows
            },
            {
                name: 'add',
                path: '/dashboard/add',
                component: add
            },
            {
                name: 'update',
                path: '/dashboard/update/:id_record',
                component: update
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'Notfound',
        component: () => import(/* webpackChunkName: "login_register" */ '../views/404.vue'),

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
