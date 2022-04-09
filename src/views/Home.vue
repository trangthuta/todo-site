<template>
  <div>
    <div class="title">
      <p>Todo List</p>
      <input
        type="text"
        placeholder="Enter todo..."
        class="add-todo-field"
        v-model="todo"
      />
      <button class="add-todo" @click="add()">+ Add Todo</button>
    </div>
    <div class="container">
      <p>{{this.isActive.length}} todos left</p>
      <div class="todo-menu">
        <span
          @click="showTodos()"
          v-bind:class="{ 'box-color': active == 'all' }"
        >
          All
        </span>
        <span
          class="menu-item"
          v-bind:class="{ 'box-color': active == 'active' }"
          @click="todosActive()"
        >
          Active
        </span>
        <span v-bind:class="{ 'box-color': active == 'completed' }"
        @click="todoCompleted()">
          Completed</span
        >
      </div>
      <div class="todo-list">
        <Todo :todosData="todosData" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState  ,mapGetters} from "vuex";
import Todo from "../components/Todo.vue";

export default {
  name: "HomePage",
  data() {
    return {
      todo: "",
      todosData: [],
      active: "",
    };
  },
  components: {
    Todo,
  },
  methods: {
    ...mapActions(["getApiTodos" ,"addTodo"]),
    showTodos() {
      // this.getApiTodos();
      // this.todosData = this.todos;
      // console.log(this.todosData);
      this.active = "all";
    },
    todosActive() {
      this.todosData = this.isActive
      this.active = 'active'
    },
    todoCompleted() {
      this.todosData = this.isCompleted
      this.active = "completed"
    },
    add() {
       this.addTodo(this.todo)
       this.showTodos()
       this.todo = ''
    }
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["isActive",'isCompleted']),
    
  },
  async created() {
    await this.getApiTodos()
      this.todosData = this.todos
      console.log(this.todosData);
      this.active = "all";
  },
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
  min-height: 300px;
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
  border: solid 1px #d06896;
}
</style>
