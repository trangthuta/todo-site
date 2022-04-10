<template>
  <div class="container">
        <div class="todo-item">
        <div class="todo-content" v-bind="textContent" >
          {{todo.title}}
        </div>
        <p class="todo-tit">{{formatTime(todo.createdAt)}}</p>
        <div class="todo-icon">
          <!-- <p class="item-icon box-check" @click ='updateStatusCompleted(todo)'></p> -->
          <input type="checkbox" class="item-icon" @click ='updateStatusCompleted(todo)'>
          <i class="fa-solid fa-pen-to-square item-icon" @click="update(todo)" ></i>
          <i class="fa-solid fa-trash item-icon" @click="deleteChildTodo(todo)"></i>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Todo",
  props: ['todo'],
  data() {
 return {
   textContent : ''
 }
  },
  methods : {
    ...mapActions(['updateTodo']),
    formatTime(e) {
      const date =new Date(e).toLocaleDateString('vi-VI')
      const time =new Date(e).toLocaleTimeString('vi-VI')
      return `${date} - ${time}`
    },
    deleteChildTodo(e) {
      this.$emit('delete-todo-child', e)
    },
    updateStatusCompleted(e) {
      this.$emit('update-status-completed ', e)
      alert('vừa check!')
    }
 
     
  }

}
</script>

<style scoped>
.box-check {
  width : 15px;
  height: 15px;
  border: 1px solid #d06896;
  display: inline-block;
}
.todo-item {
  float: left;
  margin: 20px 40px;
  width: calc(25% - 80px);
  border: 2px solid #6dabe4;
  border-radius: 20px;
  padding: 10px 15px;
}
/* .todo-item:hover {
   transform: scale(1.1);
   border: 1px solid red;
   transition: all 1s;
}
.todo-item:hover .todo-content {
  border-color :red
}
.todo-item:hover .todo-icon {
  color:red
} */
.todo-tit {
  color:#d06896;
  text-align: right;
  font-size: 12px;
  font-style: italic
}
.todo-content {
  text-align: justify;
  min-height: 130px ;
  margin: 5px 0 ;
  font-size: 14px;
  border : 1px solid #6dabe4 ;
  border-radius: 10px;
  padding : 5px ;
}
.todo-icon {
  float: right;
  cursor: pointer;
}
.item-icon {
  color :#d06896;
  margin-right: 3px;
}
.item-icon:last-child{
  margin-right: 0;
}

.item-icon:hover {
  color : red
}

</style>
