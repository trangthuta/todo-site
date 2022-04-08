<template>
  <div>
    <div class="title">
      <p>Todo List</p>
      <button class="add-todo">+ Add Todo</button>
    </div>
    <div class="container">
      <p>0 todos left</p>
      <div class="todo-menu">
        <span> All </span>
        <span class="menu-item"> Active </span>
        <span> Completed</span>
      </div>
      <div class="todo-list">
        <Todo> </Todo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Todo from "../components/Todo.vue";

export default {
  name: "HomePage",
  components: {
    Todo,
  },
  methods: {
    ...mapActions(['getApiTodos']),

  },computed :{
  ...mapState(['todos']),
  },
   async mounted() {
     await this.getApiTodos()
     console.log(this.todos[0])
  }

};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  padding: 60px 0;
  background-color: rgba(208, 104, 150, 0.1);
}
.add-todo {
  border: none;
  background-color: #d06896;
  padding: 5px;
  color: white;
  cursor: pointer;
}
.todo-menu {
  color: #d06896;
  text-align: center;
}
.menu-item {
  margin: 0 5px;
}
.todo-menu > span {
  padding: 5px;
  cursor: pointer;
}
.todo-list {
  margin: 50px 0;
}
</style>
