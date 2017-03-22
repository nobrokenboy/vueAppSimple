/**
 * Created by jessic on 2017/3/14.
 */
import Vue from 'vue';
import Router from 'vue-router';
import publish from 'components/publish/publish.vue';
import specialColumn from 'components/specialcolumn/specialColumnList.vue';
import chat from 'components/chat/chat.vue';
import discovery from 'components/discovery/discoveryList.vue';
import user from 'components/user/userCenter';
import login from 'components/user/login';
import register from 'components/user/register';
import findPassword from 'components/user/findpassword';
import search from 'components/search';
Vue.use(Router);
const routes=[
    {
        path:'/',
        name:'discovery',
        component:discovery
    },
    {
        path:'/discovery',
        name:'discovery',
        component:discovery
    },
    {
        path:'/specialColumn',
        name:'specialColumn',
        component:specialColumn
    },
    {
        path:'/chat',
        name:'chat',
        component:chat
    },
    {
        path:'/publish',
        name:'publish',
        component:publish
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/register',
        name:'register',
        component:register
    },
    {
        path:'/findPassword',
        name:'findPassword',
        component:findPassword
    },
    {
        path:"/search",
        name:"search",
        component:search,
        beforeEnter: (to, from, next) => {
            //对进入用户中心前的路由做session记录
            sessionStorage.setItem("userBeforeRouterName",from.path);
            next();
        }
    },
    {
        path:'/user',
        name:'user',
        component:user,
        beforeEnter: (to, from, next) => {
            console.log("判断登录然后进入用户中心");
            console.log(to);
            console.log(from.path);
            //对进入用户中心前的路由做session记录
            sessionStorage.setItem("userBeforeRouterName",from.path);
            if(sessionStorage.getItem("accessToken")){
                next();
            }else{
                //进入登录界面
                next({
                    path: '/login'
                });
            }
        }
    }
];
const router=new Router({
    routes// （缩写）相当于 routes: routes
});
export default router;