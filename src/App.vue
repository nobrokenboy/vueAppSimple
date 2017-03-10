<template>
  <div id="app">
     <AppHeader></AppHeader>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
