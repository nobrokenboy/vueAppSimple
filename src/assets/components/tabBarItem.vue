<template>
        <!--子组件被点击时,触发父组件的input事件，更改父组件绑定的value的值-->
        <li class="menu-lists" :class="{'active':isActive}" @click="goRouter">
            <router-link  :to="id">
                <p class="menu-list-icon">
                    <slot name="iconfont"></slot>
                </p>
                <p class="menu-list-text">
                    <slot></slot>
                </p>
            </router-link>
        </li>
</template>
<script type="text/ecmascript-6">
    export default{
        props:['id'],
        data(){
            return {
                isLogin:true
            }
        },
        computed:{
            isActive(){
                return this.$parent.value===this.id;
            }
        },
        mounted(){
            console.log("hello");
         },
        methods:{
            goRouter(){
                this.$parent.$emit('input',this.id);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../sass/var.scss";
     .menu-lists{
            display:table;
            float:left;
            width:100%/$footerBarLiNums;
            height: 100%;
            text-align:center;
            a{
                display:table-cell;
                vertical-align: middle;
                color:#686868;
                font-size:14px;
                i{
                    display:block;
                    width:100%;
                    margin-bottom: 5px;
                    font-size:20px;
                }
            }
            &.active{
                a{
                    color:$themeColor;
                }
            }
        }

</style>