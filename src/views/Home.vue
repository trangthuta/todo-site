<template>
  <div>
    <div class="title">
      <p>Todo List</p>
      <input
        type="text"
        placeholder="Enter new todo..."
        class="add-todo-field"
        v-model="todo"
        @keypress.enter="add()"
      />
      <button class="add-todo" @click="add()">+ Add Todo</button>
    </div>
    <div class="container">
      <div class="todo-menu">
        <span
          @click="showTodos()"
          v-bind:class="{ 'box-color': active == 'all' }"
        >
          All ({{getTodos.length}})
        </span>
        <span
          class="menu-item"
          v-bind:class="{ 'box-color': active == 'active' }"
          @click="todosActive()"
        >
          Active ({{isActive.length}})
        </span>
        <span
          v-bind:class="{ 'box-color': active == 'completed' }"
          @click="todoCompleted()"
        >
          Completed ({{isCompleted.length}})</span>
      </div>
      <div class="todo-list">
        <p class="message" v-if="getTodos.length == 0">Nothing ...🤷‍♀️</p>
        <div class="todo-wrap">
          <Todo
            v-for="todo in showTodosFilter"
            :todo="todo"
            :key="todo.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Todo from "../components/Todo.vue";

export default {
  name: "HomePage",
  data() {
    return {
      todo: "",
      active: "all",
    };
  },
  components: {
    Todo,
  },
  methods: {
    ...mapActions([
      "getApiTodos",
      "addTodo"
    ]),

    showTodos() {
      this.active = "all";
    },
    todosActive() {
      this.active = "active";
    },
    todoCompleted() {
      this.active = "completed";
    },

    add() {
      const todo = this.todo.trim();
      if (todo) {
        this.addTodo(this.todo)
        this.todo = "";
      }
    },
  },
  computed: {
    ...mapGetters(["isActive", "isCompleted", "getTodos"]),
    showTodosFilter() {
      switch (this.active) {
        case "active":
          return this.isActive;
        case "completed":
          return this.isCompleted;
        default:
          return this.getTodos;
      }
    },
  },
  async mounted() {
     await this.getApiTodos();
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  padding: 60px 0;
  background-color: rgba(208, 104, 150, 0.1);
  color: #d06896;
}
.add-todo {
  border: none;
  background-color: #6dabe4;
  padding: 5px;
  color: white;
  cursor: pointer;
}
.todo-menu {
  color: #d06896;
  text-align: center;
  margin: 30px 0px;
}
.menu-item {
  margin: 0 5px;
}
.todo-menu > span {
  padding: 5px;
  cursor: pointer;
}
.add-todo-field {
  border: 1px solid #6dabe4;
  padding: 10px;
  outline: none;
  /* background-color : #6dabe4; */
  border-radius: 20px;
  margin-right: 10px;
}
.box-color {
  padding: 3px;
  border-bottom: 3px solid #d06896;
}
.message {
  color: #6dabe4;
  text-align: center;
  padding: 50px 0;
}
</style>
