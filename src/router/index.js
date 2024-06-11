import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes";
import store from '../store/auth';

let url = ''
if( config.APP_SUB_PATH != ''){
    url = `${config.APP_SUB_PATH}/vue/`
}
const router = createRouter({
    scrollBehavior: () => ({left: 0, top: 0}),
    history: createWebHistory(url),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
