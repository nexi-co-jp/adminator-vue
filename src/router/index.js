import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/login/login.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

import layout from '@/components/layout/layout.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login page',
        component: Login,
    },
    {
        path: '/',
        name: 'dash',
        component: layout,
        children: [{
                path: '/main',
                name: 'main',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: About,
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "dashboard" */
                        '../views/index.vue'
                    ),
            },
            {
                path: 'about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "about" */
                        '../views/About.vue'
                    ),
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;