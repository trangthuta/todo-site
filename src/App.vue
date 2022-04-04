<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <headerTodo />
    <router-view />
  </div>
</template>
<script>
import headerTodo from './components/Header'
export default {
  components : {
    headerTodo
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
/* background: url("https://thuthuatnhanh.com/wp-content/uploads/2021/12/background-de-thuong-may-trang-va-nen-hong.jpg") no-repeat; */
/* background: url("https://thuthuatnhanh.com/wp-content/uploads/2021/12/background-de-thuong-may-trang-va-nen-hong.jpg") no-repeat;s */
background: url("https://scr.vn/wp-content/uploads/2020/07/h%C3%ACnh-n%E1%BB%81n-c%C3%B3-con-di%E1%BB%81u.jpg") no-repeat;
  background-size: cover;
  background-position: top;
  transition: 0.4s;
}
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

</style>
