/*import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);
new Vue({
  el: '#app',
  render: h => h(App)
})*/
import Vue from 'vue'
import App from './App'
import router from 'router'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
