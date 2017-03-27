<template>
    <li class="common-tab-select" :class="{'active':isChoose}" @click="change">
        <slot></slot>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['text'],
        data(){
            return {

            }
        },
        computed:{
            isChoose(){
                var self=this;
                return self.$parent.value==self.text;
            }
        },
        mounted(){
            console.log("hello");
        },
        methods:{
            change(){
                console.log("hellooo");
                var self=this;
                self.$parent.$emit('input',self.text);
                self.$emit("change",self.text);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/var.scss";
    .common-tab-select{
        position:relative;
        float:left;
        width:33.3%;
        height:100%;
        border-bottom:2px solid #fff;
        text-align:center;
        &.active{
            color:$themeColor;
         }
    }
</style>