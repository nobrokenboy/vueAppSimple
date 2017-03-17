<template>
    <transition enter-active-class="animated fadeIn">
        <div class="app-content">
            <p>{{published}}</p>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    import  marked from 'marked'
    export default {
        data(){
            return {
                published:"1111"
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/animate.min.scss";
</style>