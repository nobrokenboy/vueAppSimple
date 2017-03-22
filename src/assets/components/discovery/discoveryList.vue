<template>
    <transition enter-active-class="animated fadeIn">
        <div class="app-content" id="appDiscovery">
            <BirdLoading v-if="isLoading" leave-active-class="animated fadeOut"></BirdLoading>
            <p>O(∩_∩)O哈哈哈~</p>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    import BirdLoading from "components/loading/bird.vue"
    export default {
        name: 'discoveryList',
        components:{BirdLoading},
        data () {
            return {
                isLoading:true
            }
        },
        mounted(){
            var self=this;
            this.$nextTick(function () {
                setTimeout(function(){
                    self.isLoading=false;
                 },2000);
            });
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/animate.min.scss";
</style>