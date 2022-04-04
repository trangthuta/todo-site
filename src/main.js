import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import API from './api/api_base'

// import axios from 'axios'

axios.default.baseURL = 'https://mvn-task-manager.work/' 


// axios.defaults.baseURL("https://mvn-task-manager.work/api/")





Vue.config.productionTip = false

new Vue({
  router,
  axios ,
  API ,
  // base_url,
  // store ,
  render: h => h(App)
}).$mount('#app')
