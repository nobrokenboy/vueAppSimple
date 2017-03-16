<template>
  <div id="app">
     <AppHeader></AppHeader>
     <!-- 效果flipInY-->
     <!-- <transition enter-active-class="animated fadeIn">-->
        <router-view></router-view>
     <!-- </transition>-->
     <AppFooter></AppFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import AppHeader from 'components/header.vue';
  import AppFooter from 'components/footer.vue';
  export default {
    name: 'app',
    components:{AppHeader,AppFooter},
    data(){
      return {
          transitionName:'slide-left'
      }
    },
   watch: {
      '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
   }

  }
</script>

<style lang="scss">
   @import "./assets/sass/animate.min.scss";
  #app{
      width:100%;
      height:100%;
  }
</style>
