import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import bootstrapcss from 'bootstrap/dist/css/bootstrap.css';
// 引入路由
import router from "./router.js"
Vue.use(Router);

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({
            path: '/login'
        });
    } else {
        next();
    }
});
new Vue({
    el: '#app',
    router, // 注入到根实例中
    render: h => h(App)
});
