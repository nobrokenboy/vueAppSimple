<template>
    <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <div id="forgetPassword" v-if="!isClose">
            <!--关闭按钮-->
            <div class="margin-bottom-10 clearfix">
                <a class="fr" @click="closeLogin">
                    <i class="iconfont f20">&#xe641;</i>
                </a>
            </div>
            <!--logo-->
            <div class="app-form-layer">
                <figure class="app-login-img-wrapper">
                    <img src="../../images/little.png" width="200px" class="animated bounce animted-infinite"/>
                </figure>
                <form >
                    <div class="app-form-control app-form-text-w">
                        <i class="iconfont app-form-icon">&#xe605;</i>
                        <input type="text" class="app-form-text" placeholder="Username" @keyup="isFocus=true"/>
                    </div>
                    <div class="app-form-control app-form-text-w">
                        <i class="iconfont app-form-icon">&#xe6d1;</i>
                        <input type="password" class="app-form-text" placeholder="Password" @keyup="isFocus=true"/>
                    </div>
                    <div class="app-form-control margin-top-10">
                        <a class="app-common-btn" :class="{'app-common-active-btn':isFocus}">Sign in</a>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
        return {
            isFocus:false,
            isClose:false
        }
    },
    mounted(){
        console.log(this.isClose);
    },
    methods:{
        closeLogin(){
            console.log("关闭登录，回去上一个状态!!!!!");
            this.isClose=true;
            const router = this.$router;
            router.push({ path: sessionStorage.getItem("userBeforeRouterName")});
        }
    }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/var.scss";
    @import "../../sass/animate.min.scss";
    @import "../../sass/common.scss";
    #forgetPassword{
        position: fixed;
        left: 0;
        top: 0;
        z-index:99;
        width:100%;
        height:100%;
        background:#fff;
        background:url(../../images/loginBg.png) no-repeat center center;
        padding:30px 20px 60px;
        .app-login-img-wrapper{
            text-align:center;
        }
        input{
            color:#fff;
        }
    }

</style>