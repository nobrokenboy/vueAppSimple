<template>
    <transition enter-active-class="animated fadeIn">
        <div class="app-content" id="appDiscovery">
            <BirdLoading v-if="isLoading" leave-active-class="animated fadeOut"></BirdLoading>
            <commonSlider v-if="!isLoading">
                <div  class="sy-slider-img" v-for="(item,key) in sliderImgs"
                      :style="{ 'background-image': `url(${item.imgUrl})` }">
                   <!-- <img :src=item.imgUrl />-->
                </div>
                <a class="sy-slider-desc" v-for="(item,key) in sliderImgs">{{item.desc}}</a>
            </commonSlider>
            <p>O(∩_∩)O哈哈哈~</p>

        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    import BirdLoading from "components/loading/bird.vue"
    import commonSlider from "components/slider/commonSlider.vue"
    export default {
        name: 'discoveryList',
        components:{BirdLoading,commonSlider},
        data () {
            return {
                isLoading:true,
                sliderImgs:[
                    {
                        "desc":"num1",
                        "imgUrl":"http://covteam.u.qiniudn.com/test18.jpg"
                    },
                    {
                        "desc":"num2",
                        "imgUrl":"http://covteam.u.qiniudn.com/test19.jpg"
                    },
                    {
                        "desc":"num3",
                        "imgUrl":"http://covteam.u.qiniudn.com/test20.jpg"
                    },
                    {
                        "desc":"num4",
                        "imgUrl":"http://covteam.u.qiniudn.com/test21.jpg"
                    }
                ]

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
    #appDiscovery{
        width:100%;
        .sy-slider-container{
            width:100%;
            height:200px;
        }
    }

</style>