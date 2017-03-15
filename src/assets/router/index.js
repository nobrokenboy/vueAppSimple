/**
 * Created by jessic on 2017/3/14.
 */
import Vue from 'vue';
import Router from 'vue-router';
import topLine from 'components/topline/topLineList.vue';
import specialColumn from 'components/specialcolumn/specialColumnList.vue';
import chat from 'components/chat/chat.vue';
import discovery from 'components/discovery/discoveryList.vue';
import user from 'components/user/userCenter';
import login from 'components/user/login';
Vue.use(Router);
const routes=[
    {
        path:'/',
        name:'topLine',
        component:topLine
    },
    {
        path:'/topLine',
        name:'topLine',
        component:topLine
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
        path:'/discovery',
        name:'discovery',
        component:discovery
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/user',
        name:'user',
        component:user,
        beforeEnter: (to, from, next) => {
            console.log("判断登录然后进入用户中心");
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