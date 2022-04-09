<template>
  <div class="todo-child container">
    <div class="todo-wrap">

        <div class="todo-item" v-for="todo in todosData" :key="todo.id">
        <p class="todo-tit">{{formatTime(todo.createdAt)}}</p>
        <div class="todo-content">
          {{todo.title}}
        </div>
        <div class="todo-icon">
          <input type="checkbox" class="item-icon">
          <i class="fa-solid fa-pen-to-square item-icon" @click="update(todo)" ></i>
          <i class="fa-solid fa-trash item-icon" @click="deteleTodo(todo.id)"></i>
        </div>
      </div>





    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Todo",
  props :{
  todosData :[] ,
  },
  methods : {
    ...mapActions(['updateTodo','deteleTodo']),
    formatTime(e) {
      const date =new Date(e).toLocaleDateString('vi-VI')
      const time =new Date(e).toLocaleTimeString('vi-VI')
      return `${date} - ${time}`
    }
    ,
    async update() {
      // const payload  = {
      //   id : id.id,
      //   status : id.status,
      //   title : id.title
      // }
      // await this.updateTodo(payload)
      // console.log(payload)
    },
    // async delete(e) {
    //    this.deteleTodo(e)
    // }
  }

}
</script>

<style scoped>
.todo-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.todo-item {
  margin: 20px 40px;
  width: calc(25% - 80px);
  /* box-shadow: 5px 5px 5px #6dabe4; */
  border-top: 6px solid #6dabe4 !important;
  border: 1px solid #6dabe4;
  border-radius: 20px;
  padding: 10px 15px;
}
.todo-item:hover {
   transform: scale(1.1);
   border-top: 6px solid red !important;
   border: 1px solid red;
   transition: all 1s;
}
.todo-item:hover .todo-tit {
  color:#d06896
}
.todo-tit {
  color:#6dabe4;
  text-align: center;
  font-size: 16px;
}
.todo-content {
  text-align: justify;
  min-height: 100px ;
  margin: 10px 0 ;
  font-size: 14px;
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
