import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import storeConfig from './store'

Vue.use(Vuex)
axios.defaults.baseURL = ("https://mvn-task-manager.work/")
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

const store = new Vuex.Store(storeConfig)






Vue.config.productionTip = false

new Vue({
  router,
  store ,
  render: h => h(App)
}).$mount('#app')
