import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import storeConfig from './store'
Vue.use(Vuex)
axios.defaults.baseURL = ("https://mvn-task-manager.work/")
const store = new Vuex.Store(storeConfig)


// axios.create({
//   baseURL : 'https://mvn-task-manager.work/'
// })






Vue.config.productionTip = false

new Vue({
  router,
  store ,
  // api_base,
  render: h => h(App)
}).$mount('#app')
