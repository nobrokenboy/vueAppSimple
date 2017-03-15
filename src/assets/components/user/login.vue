<template>
    <transition name="custom-classes-transition"
                enter-active-class="animated bounceOutLeft"
                leave-active-class="animated bounceOutRight">
        <div id="login">
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
                    <div class="clearfix margin-top-10">
                        <a class="fl f14 font-white">Sign up</a>
                        <a class="fr f12 font-white">forget password？</a>
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
                isFocus:false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/var.scss";
    @import "../../sass/animate.min.scss";
    @import "../../sass/common.scss";
    #login{
        position:relative;
        width:100%;
        height:100%;
        background:#fff;
        background:url(../../images/loginBg.png) no-repeat center center;
        padding:60px 20px;
        .app-login-img-wrapper{
            text-align:center;
        }
        input{
            color:#fff;
        }
    }

</style>