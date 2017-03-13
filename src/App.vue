<template>
  <div id="app">
     <AppHeader></AppHeader>
<!--     <div class="app-content">
     </div>-->
     <AppFooter></AppFooter>
   <!-- <button class="btn-edit" @click="editClick">{{btnStatus}}</button>-->
  </div>
</template>

<script type="text/ecmascript-6">
import AppHeader from 'components/header.vue';
import AppFooter from 'components/footer.vue';
export default {
  name: 'app',
  components:{AppHeader,AppFooter},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      status:'*'
    }
  },
  computed:{
    btnStatus () {
      const self=this;
      return self.status=="*"?"编辑":"增加";
    }
  },
  methods:{
    editClick () {
      debugger
      const self=this;
      self.status="";
      console.log("helllo!");
    }
  }
}
</script>

<style lang="scss">

</style>
