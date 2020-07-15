import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/login.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

import layout from '@/components/layout/layout.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login page',
        component: Login
    },
    {
        path: '/404',
        name: '404',
        component: () =>
            import (
                /* webpackChunkName: "404" */
                '../views/404.vue'
            )
    },
    {
        path: '/500',
        name: '500',
        component: () =>
            import (
                /* webpackChunkName: "404" */
                '../views/404.vue'
            )
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import (
                /* webpackChunkName: "signup" */
                '../views/signup.vue'
            )
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
                component: About
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
                    )
            },
            {
                path: 'email',
                name: 'email',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "email" */
                        '../views/email.vue'
                    )
            },
            {
                path: 'compose',
                name: 'compose',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "compose" */
                        '../views/compose.vue'
                    )
            },
            {
                path: 'calendar',
                name: 'calendar',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "calendar" */
                        '../views/calendar.vue'
                    )
            },
            {
                path: 'chat',
                name: 'chat',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "chat" */
                        '../views/chat.vue'
                    )
            },
            {
                path: 'charts',
                name: 'charts',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "charts" */
                        '../views/charts.vue'
                    )
            },
            {
                path: 'forms',
                name: 'forms',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "forms" */
                        '../views/forms.vue'
                    )
            },
            {
                path: 'ui',
                name: 'ui',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "ui" */
                        '../views/ui.vue'
                    )
            },
            {
                path: 'basicTable',
                name: 'basicTable',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "basicTable" */
                        '../views/basicTable.vue'
                    )
            },
            {
                path: 'dataTable',
                name: 'dataTable',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "dataTable" */
                        '../views/dataTable.vue'
                    )
            },
            {
                path: 'googleMap',
                name: 'googleMap',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "googleMap" */
                        '../views/googleMap.vue'
                    )
            },
            {
                path: 'vectorMap',
                name: 'vectorMap',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import (
                        /* webpackChunkName: "vectorMap" */
                        '../views/vectorMap.vue'
                    )
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
                    )
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;