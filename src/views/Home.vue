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
      <!-- <p>{{this.isActive.length}} todos left</p> -->
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
        <span v-bind:class="{ 'box-color': active == 'completed' }"
        @click="todoCompleted()">
          Completed ({{isCompleted.length}})</span
        >
      </div>
      <div class="todo-list">
        <p class="message" v-if="todosData.length == 0">
          Nothing ...🤷‍♀️
        </p>
        <!-- <Todo :todosData="todosData" /> -->
        <div class="todo-wrap">
          <Todo
           v-for="todo in this.todosData"
            :todo="todo"
            :key="todo.id"
            @delete-todo-child ="deleteTodoChild"
            @update-status-completed ="updateStatusCompleted"

            />
        </div>
        

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions  ,mapGetters} from "vuex";
import Todo from "../components/Todo.vue";

export default {
  name: "HomePage",
  data() {
    return {
      todo: "",
      todosData: [],
      active: "login",
    };
  },
  components: {
    Todo,
  },
  methods: {
    ...mapActions(["getApiTodos" ,"addTodo" ,'deleTodo', 'updateTodoCompleted']),
   async showTodos() {
      this.active = "all";
      await this.getApiTodos()
      this.todosData = this.getTodos
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
      const todo = this.todo.trim()
      if(todo){
       this.addTodo(this.todo)
       this.showTodos()
       this.todo = ''
      }
    },
       deleteTodoChild(e) {
        console.log(e)
        this.deleTodo(e)
        this.showTodos()
       
      },
      //   updateTodoChild(e) {
      //   this.updateTodo(e)
      //   this.showTodos()
       
      // },
      updateStatusCompleted(e) {
        this.updateTodoCompleted(e)
        this.showTodos()
      }
  },
  computed: {

    ...mapGetters(["isActive",'isCompleted' ,"getTodos"]),
    
  },
  async created() {
     await this.showTodos()
    //  location.reload()
  },
  // beforeDestroy () {
  //   this.todosData =[]
  // }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  padding: 60px 0;
  background-color: rgba(208, 104, 150, 0.1);
  color :#d06896 ;
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
  margin:30px 0px
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
  border-bottom : 3px solid #d06896;
}
.message {
  color : #6dabe4 ;
  text-align: center;
  padding : 50px 0
}
</style>
