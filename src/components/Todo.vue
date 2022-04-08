<template>
  <div class="todo-child container">
    <div class="todo-wrap">

        <div class="todo-item">
        <p class="todo-tit">Ngày 16-02-2022</p>
        <div class="todo-content">
          Học ReactJs
          <br>
          Học ReactJs
        </div>
        <div class="todo-icon">
          <input type="checkbox" class="item-icon">
          <i class="fa-solid fa-pen-to-square item-icon"></i>
          <i class="fa-solid fa-trash item-icon"></i>
        </div>
      </div>

              <div class="todo-item">
        <p class="todo-tit">Ngày 16-02-2022</p>
        <div class="todo-content">
          Học ReactJs
          <br>
          Học ReactJs
        </div>
        <div class="todo-icon">
          <input type="checkbox" class="item-icon">
          <i class="fa-solid fa-pen-to-square item-icon"></i>
          <i class="fa-solid fa-trash item-icon"></i>
        </div>
      </div>




    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
};
</script>

<style scoped>
.todo-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.todo-item {
  margin: 10px 30px;
  width: calc(25% - 60px);
  /* box-shadow: 5px 5px 5px #6dabe4; */
  border-top: 6px solid #6dabe4 !important;
  border: 1px solid #6dabe4;
  border-radius: 20px;
  padding: 10px 15px;
}
.todo-item:hover {
   transform: scale(1.2);
   /* transition-duration: 2s; */
   transition: all 1s;
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
