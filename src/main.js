import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './assets/css/font-awesome.css';
import './assets/css/jquery-jvectormap.css';
import './assets/css/perfect-scrollbar.css';
import './assets/css/stylesheet.css';
import './assets/css/themify-icons.css';

import jQuery from 'jquery';
global.jquery = jQuery;
global.$ = jQuery;
window.$ = window.jQuery = require('jquery');

import './assets/js/common.js';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');