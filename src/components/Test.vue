<template>
  <div class="test container">
    <p>
      {{ name }}
    </p>
    <button @click="printHello">Press to print " Hello"</button>
    <button @click="changeName('Trần Lương Ninh')">Press to change</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      name: "Tạ Thị Thu Trang",
    };
  },
  beforeCreate() {
    console.log("Nothing gets called before me!");
  },
  created() {
    this.name = 'thay đổi nè'
    console.log('propertyComputed will update, as this.property is now reactive.')
  }
,
  methods: {
    printHello() {
      console.log("Hello!");
    },
     changeName() {
     console.log("change ok")
    },
  },

};
</script>

<style>
</style>