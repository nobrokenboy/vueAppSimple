<template>
  <div id="app">
     <AppHeader></AppHeader>
      <transition>
        <router-view></router-view>
      </transition>
     <AppFooter></AppFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import AppHeader from 'components/header.vue';
  import AppFooter from 'components/footer.vue';
  export default {
    name: 'app',
    components:{AppHeader,AppFooter}
  }
</script>

<style lang="scss">
  #app{
      width:100%;
      height:100%;
  }
</style>
