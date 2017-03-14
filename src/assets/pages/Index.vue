<template>
    <div id="index">
        <!--头部-->
        <section>
            <AppHeader></AppHeader>
        </section>
        <!--内容-->
        <section>
            <!--{{select}}-->
        </section>
        <!--脚部导航栏-->
        <section>
            <!--<tab-bar-wrapper v-bind:value="select" v-on:input="value = $event.target.value">等效于下面的-->
            <tab-bar-wrapper v-model="select">
                <tab-bar-item id="tab1">
                    <i class="iconfont" slot="iconfont">&#xe63f;</i>
                    头条
                </tab-bar-item>
                <tab-bar-item id="tab2">
                    <i class="iconfont" slot="iconfont">&#xe600;</i>
                    专栏
                </tab-bar-item>
                <tab-bar-item id="tab3">
                    <i class="iconfont" slot="iconfont">&#xe7e3;</i>
                    问答
                </tab-bar-item>
                <tab-bar-item id="tab4">
                    <i class="iconfont" slot="iconfont">&#xe66d;</i>
                    发现
                </tab-bar-item>
                <tab-bar-item id="tab5">
                    <i class="iconfont" slot="iconfont">&#xe629;</i>
                    我的
                </tab-bar-item>
            </tab-bar-wrapper>
        </section>
        <!-- <button class="btn-edit" @click="editClick">{{btnStatus}}</button>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import AppHeader from 'components/header.vue';
    import TabBarWrapper from 'components/tabBarWrapper.vue';
    import TabBarItem from 'components/tabBarItem.vue';
    export default {
        name: 'index',
        components:{AppHeader,TabBarWrapper,TabBarItem},
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                status:'*',
                select:'tab1'
            }
        },
        computed:{
            btnStatus () {
                const self=this;
                return self.status=="*"?"编辑":"增加";
            }
        },
        methods:{
            editClick () {
                debugger
                const self=this;
                self.status="";
                console.log("helllo!");
            }
        }
    }
</script>

<style lang="scss">

</style>
