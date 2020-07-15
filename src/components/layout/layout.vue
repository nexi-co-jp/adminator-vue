<template>
    <div id="app">
        <div :class="sidebarClass">
            <side-bar></side-bar>
            <div class="page-container">
                <header-bar></header-bar>
                <main class="main-content bgc-grey-100">
                    <div id="mainContent">
                        <div class="full-container">
                            <router-view></router-view>
                        </div>
                    </div>
                </main>
                <footer-bar></footer-bar>
            </div>
        </div>
    </div>
</template>
<script>
import headerBar from '@/components/layout/headerBar.vue';
import sideBar from '@/components/layout/sideBar.vue';
import footerBar from '@/components/layout/footerBar.vue';

export default {
    name: 'layout',
    components: {
        headerBar,
        sideBar,
        footerBar,
    },
};
</script>
<style>
#loader {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    visibility: visible;
    position: fixed;
    height: 100vh;
    width: 100%;
    background: #fff;
    z-index: 90000;
}

#loader.fadeOut {
    opacity: 0;
    visibility: hidden;
}

.spinner {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
    animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1);
        opacity: 0;
    }
}

@keyframes sk-scaleout {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
}
</style>
