<template>
  <div id="app">
    <headerTodo />
    <router-view />
    <!-- <footerPage class="footer-config"/> -->
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import headerTodo from './components/Header'
// import footerPage from './components/Footer.vue'
export default {
  components : {
    headerTodo,
    // footerPage
  },
  methods :{
 ...mapActions(['tryLogin'])
  },
  created() {
   this.tryLogin()
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
.footer-config {
   position: relative;
   margin-top : 100vh
}

</style>
