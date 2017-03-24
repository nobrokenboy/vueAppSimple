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
        float:left;
        height:100%;
        padding:0 20px;
        text-align:center;
        &.active{
            color:$themeColor;
         }
    }
</style>