<template>
  <header>
    <div class="container">
      <div class="logo">
        <h1>
          Todo<span class="logo-before" style="color: #d06896">Site</span>
        </h1>
        <p class="button-log-out"  v-if="!isLoggedIn"> </p>
        <p class="button-log-out" v-else @click="logOutEvent()">
          Logout
          <span>
            <i class="fa-solid fa-right-from-bracket"></i>
          </span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "headerTodo",
  computed: {
     ...mapGetters(['isLoggedIn']) ,
  },
   methods: {
    ...mapActions(["logout"]),
    logOutEvent() {
      this.logout()
      this.$router.replace('/')
    }
   
  },
};
</script>

<style>
.logo {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6dabe4;
}
h1 {
  color: #6dabe4;
}
.logo-before {
  font-weight: 100;
}
.button-log-out {
  cursor: pointer;
}
</style>
