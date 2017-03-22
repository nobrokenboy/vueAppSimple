<template>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div id="search">
            <div class="fixed-header">
                <div class="search-box clearfix">
                    <div class="search-input fl">
                        <i class="iconfont icon-search">&#xe608;</i>
                        <input type="text" placeholder="请输入关键字" class="input-text"
                               v-model="sendData.keyword" @keyup="isKeyUp=true"/>
                        <i class="iconfont icon-delete" v-if="isKeyUp" @click="clearClick">&#xe623;</i>
                    </div>
                    <div class="cancel-btn fl">
                        <a class="cancel-btn-text" @click="closeLogin">取消</a>
                    </div>
                </div>
                <!--过滤项-->
                <div class="filter-wrapper">
                    <ul class="filter-items clearfix">
                        <li class="active">用户名</li>
                        <li>文章</li>
                        <li>标签</li>
                    </ul>
                    <div class="filter-slider">

                    </div>
                </div>
            </div>
            <!--过滤结果-->
            <div>

            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default {
        props:[],
        data () {
            return {
                isKeyUp:false,
                sendData:{
                    keyword:"",
                    filters:""
                }
            }
        },
        mounted(){


        },
        methods:{
            closeLogin(){
                console.log("关闭登录，回去上一个状态!!!!!");
                this.isClose=true;
                const router = this.$router;
                console.log( sessionStorage.getItem("userBeforeRouterName"));
                router.push({ path: sessionStorage.getItem("userBeforeRouterName")});
            },
            clearClick(){
                console.log("fff");
                this.sendData.keyword="";
            }
        }
    }
</script>
<style lang="scss">
    @import "../sass/var.scss";
    @import "../sass/animate.min.scss";
    @import "../sass/common.scss";
    #search{
        position: fixed;
        left: 0;
        top: 0;
        z-index:99;
        width:100%;
        height:100%;
        background:#fff;
        .fixed-header{
            position:fixed;
            left:0;
            top:0;
            width:100%;
        }
        .search-box{
            height:50px;
            padding:10px;
            border-bottom:1px solid #ccc;
            .search-input{
                width:88%;
                height:100%;
                margin-right:2%;
                padding:0 5px;
                border:1px solid #ccc;
                border-radius:3px;
                .input-text{
                    width:70%;
                    width:-webkit-calc(100% - 40px);
                    width:calc(100% - 40px);
                    height:100%;
                    padding-left:10px;
                }
                .icon-search{
                    width:20px;
                    height:100%;
                }
                .icon-delete{
                    width:20px;
                    height:100%;
                }
            }
            .cancel-btn{
                display:table;
                width:10%;
                height:100%;
                text-align:right;
                .cancel-btn-text{
                    display:table-cell;
                    vertical-align:middle;
                }
            }
        }
        .filter-wrapper{
            position:relative;
            width:100%;
            .filter-items{
                border-bottom:1px solid #ccc;
                li{
                    float:left;
                    width:33.3%;
                    height:50px;
                    line-height:50px;
                    text-align:center;
                    &.active{
                        color:$themeColor;
                     }
                }

            }
            .filter-slider{
                position:absolute;
                left:0;
                bottom:0;
                width:33.3%;
                height:2px;
                background:$themeColor;

            }
        }
    }

</style>