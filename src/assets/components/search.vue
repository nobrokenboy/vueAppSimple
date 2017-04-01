<template>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div id="search">
            <div class="fixed-header">
                <div class="search-box clearfix">
                    <div class="search-input fl">
                        <i class="iconfont icon-search">&#xe608;</i>
                        <input type="text" placeholder="请输入关键字" class="input-text"
                               v-model="sendData.keyword" @keyup="isKeyUp=true,requestData()" v-focus/>
                        <i class="iconfont icon-delete" v-if="isKeyUp" @click="clearClick">&#xe623;</i>
                    </div>
                    <div class="cancel-btn fl">
                        <a class="cancel-btn-text" @click="closeLogin">取消</a>
                    </div>
                </div>
                <!--过滤项-->
                <div class="filter-wrapper">
                    <commonTabWrapper v-model="sendData.type">
                        <commonTabBarItem v-for="(item,index) in tabSelectValues"  :key="item.index" :text="item.text" v-on:change="filterClick">
                            <a class="tab-style" @click="tabClick($event)">{{item.text}}</a>
                        </commonTabBarItem>
                    </commonTabWrapper>
                    <div class="filter-slider">
                    </div>
                </div>
            </div>
            <!--过滤结果-->
            <div class="app-results">
                <ul>
                    <li>
                        <a class="block">
                            <div class="app-content-left">

                            </div>
                            <div class="app-content-right"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>
<script  type="text/ecmascript-6">
    import commonTabWrapper from 'components/tab/commonTabWrapper.vue';
    import commonTabBarItem from 'components/tab/commonTab.vue';
    import utils from 'utils/utils.js';
    export default {
        props:[],
        components:{commonTabWrapper,commonTabBarItem},
        data () {
            return {
                isKeyUp:false,
                sendData:{
                    keyword:"",
                    type:""
                },
                tabSelectValues:[
                    {
                       index:0,
                       text:"用户名"
                    },
                    {
                       index:1,
                       text: "文章"
                    },
                    {
                        index:2,
                        text:"标签"
                    }
                ],
                sliderBlock:document.getElementsByClassName("filter-slider")[0],
            }
        },
        computed:{

        },
        mounted(){
            var self=this;
            self.sendData.type=self.tabSelectValues[0].text;
            //设置滑块
            self.setSliderStyle(0);
            //设置冲击波
            var tablists=document.querySelectorAll(".common-tab-select");
            Array.from(tablists).forEach((item,index) =>{
                    let tabWidth=item.offsetWidth;
                    let tabHeight=item.offsetHeight;
                    console.log(tabWidth);
                    console.log(tabHeight);
                    //获取子元素的after元素
                    let childElement=item.childNodes[0];
                    let childClass="."+childElement.getAttribute("class");
                    //伪元素宽高
                    let afterElementWidth = window.getComputedStyle(childElement,"after").getPropertyValue('width').replace("px","");
                    let afterElementHeight= window.getComputedStyle(childElement,"after").getPropertyValue('height').replace("px","");
                    /*left以及right在ipad屏幕大上问题*/
                    console.log(afterElementWidth);
                    let insertLeft,insertTop;
                    if(afterElementWidth>tabWidth){
                        insertLeft='left:'+(-(afterElementWidth/2-tabWidth/2)+"px");
                        insertTop='top:'+(-(afterElementHeight/2-tabHeight/2)+"px");
                    }else if(tabHeight<afterElementWidth&&afterElementWidth<tabWidth){
                        insertLeft='left:'+((tabWidth/2-afterElementWidth /2)+"px");
                        insertTop='top:'+(-(afterElementHeight/2-tabHeight/2)+"px");
                    }else if(afterElementWidth<tabHeight){
                        insertLeft='left:'+((tabWidth/2-afterElementWidth/2)+"px");
                        insertTop='top:'+((tabHeight/2-afterElementHeight/2)+"px");
                    }else if(afterElementWidth==tabWidth){
                        insertLeft='left:0';
                        insertTop='top:'+(-(afterElementHeight/2-tabHeight/2)+"px");
                    }else if(afterElementWidth==tabHeight){
                        insertLeft='left:'+((tabWidth/2-afterElementWidth/2)+"px");
                        insertTop='top:0';
                    }
                    document.styleSheets[0].addRule(childClass+":after",insertLeft);
                    document.styleSheets[0].addRule(childClass+":after",insertTop);
                    console.log(insertLeft);
                    console.log(insertTop);


            });

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
            },
            filterClick(){
                var self=this;
                console.log(self.sendData.type);

                //获取对应的tab
               var tabActiveIndex;
               self.tabSelectValues.forEach((item,index) => {
                    if(item.text==self.sendData.type){
                        tabActiveIndex=index;
                        return tabActiveIndex;
                    }
                });
                self.setSliderStyle(tabActiveIndex);

            },
            requestData(){
            },
            setSliderStyle(index){
                var self=this;
                var initWidth=document.getElementsByClassName("common-tab-select")[0].offsetWidth;
                document.getElementsByClassName("filter-slider")[0].style.width=initWidth+"px";
                document.getElementsByClassName("filter-slider")[0].style.left=index*initWidth+"px";
            },
            tabClick(event){
                var self=this;
                var target=event.target;
                var childClass=target.getAttribute("class");
                var waveCenterObjWidth=target.offsetWidth/2+"px";
                var waveCenterObjHeight=target.offsetHeight/2+"px";
                var insertLeft='left:'+waveCenterObjWidth;
                var insertTop='top:'+waveCenterObjHeight;
                /*debugger*/
                document.styleSheets[0].addRule(childClass+":after",insertLeft);
                document.styleSheets[0].addRule(childClass+":after",insertTop);
                console.log(insertLeft);
                console.log(insertTop);
                var afterElementLeft = window.getComputedStyle(target,"after").getPropertyValue('left');
                var afterElementTop = window.getComputedStyle(target,"after").getPropertyValue('top');
                console.log(afterElementLeft);
                console.log(afterElementTop);
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
                display:table;
                width:88%;
                height:100%;
                margin-right:2%;
                padding:0 5px;
                border:1px solid #ccc;
                border-radius:3px;
                font-size:0;
                *word-spacing:-1px;/*兼容ie6,7*/
                .input-text{
                    width:70%;
                    width:-webkit-calc(100% - 40px);
                    width:calc(100% - 40px);
                    height:100%;
                    padding-left:10px;
                    font-size:14px;
                }
                .icon-search{
                    width:20px;
                    display: table-cell;
                    vertical-align: middle;
                }
                .icon-delete{
                    width:20px;
                    display: table-cell;
                    vertical-align: middle;
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
            background:#FF3366;
            .tab-style{
                position:relative;
                display:block;
                border-radius:5px;
                color:#fff;
                &:active{
                    &:after{
                         width: 0;
                         height: 0;
                         left:69px;
                         top:20px;
                         opacity: 1;
                         transition-duration: 0s;
                         color:red;
                     }
                 }

                 &:after{
                      content: "";
                      display: block;
                      position: absolute;
                      width:120px;
                      height:120px;
                      background: rgba(255,255,255,0.8);
                      border-radius: 50%;
                      opacity:0;
                      transition: all 1s;
                  }
            }
            .filter-slider{
                position:absolute;
                bottom:0;
                height:3px;
               /* background:$themeColor;*/
                background:#fff;
                transition:all .3s ease-in;

            }
        }
    }

</style>