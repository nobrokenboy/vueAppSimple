<template>
    <div id="footer">
        <!--脚部导航栏-->
            <!--<tab-bar-wrapper v-bind:value="select" v-on:input="value = $event.target.value">等效于下面的-->
            <tab-bar-wrapper v-model="select">
                <tab-bar-item id="discovery">
                    <i class="iconfont" slot="iconfont">&#xe66d;</i>
                    发现
                </tab-bar-item>
                <tab-bar-item id="specialColumn">
                    <i class="iconfont" slot="iconfont">&#xe600;</i>
                    专栏
                </tab-bar-item>
                <tab-bar-item id="publish">
                    <i class="iconfont f26" slot="iconfont">&#xe698;</i>
                </tab-bar-item>
                <tab-bar-item id="chat">
                    <i class="iconfont" slot="iconfont">&#xe7e3;</i>
                    问答
                </tab-bar-item>
                <tab-bar-item id="user">
                    <i class="iconfont" slot="iconfont">&#xe629;</i>
                    我的
                </tab-bar-item>
            </tab-bar-wrapper>
    </div>
</template>

<script type="text/ecmascript-6">
    import TabBarWrapper from 'components/tabBarWrapper.vue';
    import TabBarItem from 'components/tabBarItem.vue';
    export default {
        name: 'footer',
        components:{TabBarWrapper,TabBarItem},
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                status:'*'
            }
        },
        computed:{
            btnStatus () {
                const self=this;
                return self.status=="*"?"编辑":"增加";
            },
            select () {
                const self=this;
                return self.$route.name?self.$route.name:'topLine';
            }
        },
        methods:{
            editClick () {
                debugger
                const self=this;
                self.status="";
                console.log("helllo!");
            }
        },
        mounted(){
            console.log(this.$route.name);

        }
    }
</script>

<style lang="scss">
    @import "../sass/animate.min.scss";
</style>
