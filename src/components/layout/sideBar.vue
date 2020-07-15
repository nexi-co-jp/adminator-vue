<template>
    <div class="sidebar">
        <div class="sidebar-inner">
            <div class="sidebar-logo">
                <div class="peers ai-c fxw-nw">
                    <div class="peer peer-greed">
                        <a class="sidebar-link td-n" href="index.html">
                            <div class="peers ai-c fxw-nw">
                                <div class="peer">
                                    <div class="logo">
                                        <img src="/images/logo.png" alt="" />
                                    </div>
                                </div>
                                <div class="peer peer-greed">
                                    <h5 class="lh-1 mB-0 logo-text">
                                        Adminator
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="peer">
                        <div class="mobile-toggle sidebar-toggle">
                            <a href="" class="td-n">
                                <i class="ti-arrow-circle-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <menuItem :items="items" />
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import menuItem from '@/components/layout/menuItem.vue';

export default {
    name: 'sidebar',
    components: {
        menuItem,
    },
    data: () => ({
        isCollapsed: true,
        items: [
            { icon: 'c-blue-500 ti-home', text: 'Dashboard', to: 'dashboard' },
            { icon: 'c-brown-500 ti-email', text: 'Email', to: 'email' },
            {
                icon: 'c-deep-orange-500 ti-calendar',
                text: 'Compose',
                to: 'compose',
            },
            {
                icon: 'c-deep-orange-500 ti-calendar',
                text: 'Calendar',
                to: 'calendar',
            },
            {
                icon: 'c-deep-purple-500 ti-comment-alt',
                text: 'Chat',
                to: 'chat',
            },
            { icon: 'c-indigo-500 ti-bar-chart', text: 'Charts', to: 'charts' },
            { icon: 'c-light-blue-500 ti-pencil', text: 'Forms', to: 'forms' },
            {
                icon: 'c-pink-500 ti-palette',
                text: 'UI Elements',
                to: 'ui',
            },
            {
                icon: 'c-orange-500 ti-layout-list-thumb',
                text: 'Tables',
                to: '',
                children: [
                    {
                        icon: 'c-blue-500 ti-share',
                        text: 'Basic Table',
                        to: 'basicTable',
                    },
                    {
                        icon: 'c-blue-500 ti-share',
                        text: 'Data Table',
                        to: 'dataTable',
                    },
                ],
            },
            {
                icon: 'c-purple-500 ti-map',
                text: 'Maps',
                to: '',
                children: [
                    {
                        icon: '',
                        text: 'Google Map',
                        to: 'googleMap',
                    },
                    {
                        icon: '',
                        text: 'Vector Map',
                        to: 'vectorMap',
                    },
                ],
            },

            {
                icon: 'c-red-500 ti-files',
                text: 'Pages',
                to: '',
                children: [
                    {
                        icon: '',
                        text: 'Blank',
                        to: 'blank',
                    },
                    {
                        icon: '',
                        text: '404',
                        to: '404',
                    },

                    {
                        icon: '',
                        text: '500',
                        to: '500',
                    },

                    {
                        icon: '',
                        text: 'Sign In',
                        to: 'login',
                    },

                    {
                        icon: '',
                        text: 'Sign Up',
                        to: 'signup',
                    },
                ],
            },
            {
                icon: 'c-teal-500 ti-view-list-alt',
                text: 'Multiple Levels',
                to: '',
                children: [
                    {
                        icon: 'c-blue-500 ti-share',
                        text: 'menu itme',
                        to: 'about',
                    },
                    {
                        icon: 'c-blue-500 ti-share',
                        text: 'menu itme',
                        to: 'about',
                    },
                    {
                        icon: 'c-blue-500 ti-share',
                        text: 'AAA33',
                        to: 'about',
                        children: [
                            {
                                icon: 'c-blue-500 ti-share',
                                text: 'menu itme',
                                to: 'about',
                            },
                            {
                                icon: 'c-blue-500 ti-share',
                                text: 'menu itme',
                                to: 'about',
                            },
                            {
                                icon: 'c-blue-500 ti-share',
                                text: 'menu itme',
                                to: 'about',
                                children: [
                                    {
                                        icon: 'c-blue-500 ti-share',
                                        text: 'menu itme',
                                        to: 'about',
                                    },
                                    {
                                        icon: 'c-blue-500 ti-share',
                                        text: 'menu itme',
                                        to: 'about',
                                    },
                                    {
                                        icon: 'c-blue-500 ti-share',
                                        text: 'menu itme',
                                        to: 'about',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }),
    computed: {
        sidebarClass() {
            return this.isCollapsed ? 'is-collapsed' : '';
        },
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        },
        search() {
            debugger;
        },
        toggleMenu(obj) {
            const $this = $(obj.target); //.parent();

            if ($this.parent().hasClass('open')) {
                $this
                    .parent()
                    .children('.dropdown-menu')
                    .slideUp(200, () => {
                        $this.parent().removeClass('open');
                    });
            } else {
                $this
                    .parent()
                    .parent()
                    .children('li.open')
                    .children('.dropdown-menu')
                    .slideUp(200);

                $this
                    .parent()
                    .parent()
                    .children('li.open')
                    .children('a')
                    .removeClass('open');

                $this
                    .parent()
                    .parent()
                    .children('li.open')
                    .removeClass('open');

                $this
                    .parent()
                    .children('.dropdown-menu')
                    .slideDown(200, () => {
                        $this.parent().addClass('open');
                    });
            }
        },
    },
};
</script>
