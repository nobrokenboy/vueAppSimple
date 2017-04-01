<template>
    <div class="sy-slider-container">
        <div class="sy-slider-wrapper">
            <slot></slot>
        </div>
        <div class="sy-slider-arrow sy-slider-arrow-left"></div>
        <div class="sy-slider-arrow sy-slider-arrow-right"></div>
        <div class="sy-slider-pagination" v-if="slider.isPagintion">
            <ul class="sy-slider-pagination-wrapper">
                <li v-for=""></li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: [],
        data(){
            return {
                slider:{
                    isPagintion:true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sy-slider-container{
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        z-index: 1;
        .sy-slider-wrapper{
            width:100%;
            height:100%;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            transition-property: transform;
            transition-duration: 0ms;
            transform: translate3d(0px, 0px, 0px);
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;

            .sy-slider-img{
                width:100%;
                text-align: center;
                font-size: 18px;
                background: #fff;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                background-repeat:repeat;
                background-position:center center;
                background-size:cover;
                flex-shrink: 0;
            }
            .sy-slider-desc{
                color:#fff;
            }
            .sy-slider-pagination{
                position:absolute;
                left:50%;
                bottom:20px;
                -webkit-transform:translateX(-50%);
                transform:translateX(-50%);
                .sy-slider-pagination-wrapper{
                    font-size:0;
                    li{
                        display:inline-block;
                        width:10px;
                        height:10px;
                        margin-right:2px;
                        background-color:rgba(0,0,0,0.4);
                        border-radius:50%;

                    }
                }
            }
        }
    }
</style>