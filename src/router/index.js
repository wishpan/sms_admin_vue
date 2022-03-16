import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
const routes = [
    {
        path: '/login',
        component: () => import('@/pages/Login.vue'),
        meta: { notNeedAuth: true }
    },
    {
        path: '/403',
        component: () => import('@/pages/error/403.vue'),
        meta: { notNeedAuth: true }
    },
    {
        path: '/404',
        component: () => import('@/pages/error/404.vue'),
        meta: { notNeedAuth: true }
    }
];
const router = new VueRouter({
    routes
});
export default router;
//# sourceMappingURL=index.js.map