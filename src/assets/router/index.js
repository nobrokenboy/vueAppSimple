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
        path:'/user',
        name:'user',
        component:user
    }
];
export  default new Router({
    routes// （缩写）相当于 routes: routes
});