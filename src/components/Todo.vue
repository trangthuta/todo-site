<template>
  <div class="container">
    <div
      class="todo-item"
      :class="{ 'status-completed': todo.status == 'COMPLETED' }"
    >  
      <input class="todo-content" contenteditable="true" v-model=" text " 
      @change="updateTodoChild(todo)"
      />
      <p class="todo-tit">{{ formatTime(todo.createdAt) }}</p>
       <div class="update" v-if="mode == 'update'">
        <button class="btn-todo" @click="updateTodoChild(todo)">Update</button>
        <button class="btn-todo" @click="cancelUpdate()">Cancel</button>
      </div>
      <div class="todo-icon">
        <input
          type="checkbox"
          class="item-icon"
          disabled:disabled
          @change="markCompleted(todo)"
        />
          <!-- <router-link to="/homepage/todos/:id"> -->
          <i class="fa-solid fa-pen-to-square item-icon" @click="(turnOnModeUpdate(todo.id))"></i>
          <!-- </router-link> -->
        <i
          class="fa-solid fa-trash item-icon"
          @click="deleteTodoChild(todo.id)"
        ></i>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {

  name: "Todo",
  props: ["todo"],
  data() {
    return {
      check: "",
      mode: '',
      text: '',
    };
  },
  created() {
   this.text = this.todo.title
  },

  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapActions(["updateTodo", "deleTodo"]),
     turnOnModeUpdate(id) {
       this.mode = 'update'
       this.selectedTodo = id
       console.log(this.selectedTodo)
       
    },
    formatTime(e) {
      const date = new Date(e).toLocaleDateString("vi-VI");
      const time = new Date(e).toLocaleTimeString("vi-VI");
      return `${date} - ${time}`;
    },
    deleteTodoChild(id) {
      this.deleTodo(id);
    },
    markCompleted(todo) {
      let newStatus = "";
      if (todo.status == "IN_PROGRESS") {
        newStatus = "COMPLETED";
      } else {
        newStatus = "IN_PROGRESS";
      }
      todo.status = newStatus 
      this.updateTodo(todo);
    },
    updateTodoChild(todo) {
      this.text = this.text.trim()
      const data = this.text.trim()
      if(this.todo.title === this.text || this.text === '') {
        this.text= this.todo.title  
        alert("Bạn chưa sửa nội dung")
      }
       else {
         todo.title = data
         console.log(todo)
         this.updateTodo(todo) 
         
      }
      
      }
      
    }
    
  
};
</script>

<style scoped>
.btn-todo {
  padding: 5px 7px;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
}
.btn-todo:first-child {
  background-color: #6dabe4;
  border: none;
}
.btn-todo:nth-child(2) {
  background-color: #d06896;
  border: none;
}
.status-completed {
  background-color: rgba(220, 220, 220, 0.5);
  text-decoration: line-through;
  transition: all 1s;
}
.box-check {
  width: 15px;
  height: 15px;
  border: 1px solid #d06896;
  display: inline-block;
}
.todo-item {
  outline: none;
  float: left;
  display: block;
  margin: 20px 35px;
  width: calc(25% - 70px);
  border: 2px solid #6dabe4;
  border-radius: 20px;
  padding: 10px 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.todo-item:hover {
  transform: scale(1.1);
  border: 1px solid red;
  transition: all 1s;
}
.todo-item:hover .todo-content {
  border-color: red;
  outline: none;
}
.todo-item:hover .todo-icon {
  color: red;
}
.todo-tit {
  color: #d06896;
  text-align: right;
  font-size: 12px;
  font-style: italic;
}
.todo-content {
  text-align: justify;
  min-height: 130px;
  margin: 5px 0;
  font-size: 14px;
  border: 1px solid #6dabe4;
  border-radius: 10px;
  padding: 5px;
}
.todo-icon {
  float: right;
  cursor: pointer;
}
.item-icon {
  color: #d06896;
  margin-right: 3px;
}
.item-icon:last-child {
  margin-right: 0;
}

.item-icon:hover {
  color: red;
}
</style>
