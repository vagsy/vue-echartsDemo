import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件
import login from './page/login.vue'
import home from './page/home.vue'
import contact from './page/contact.vue'
import dataStatistics from './page/dataStatistics.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [{
    path: '/login',
    component: login
},{
    path: '/home',
    component: home
}, {
    path: '/contact',
    component: contact
}, {
    path: '/dataStatistics',
    component: dataStatistics
}];
var router = new VueRouter({
    routes
})
export default router;
