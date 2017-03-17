<template>
    <transition enter-active-class="animated fadeIn">
        <div class="app-content" id="appDiscovery">
            <BirdLoading></BirdLoading>
            <p>发现</p>
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

        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/animate.min.scss";
</style>