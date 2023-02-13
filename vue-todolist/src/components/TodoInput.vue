<template>
  <form class="inputBox shadow" v-on:submit.prevent="addTodo">
    <input type="text" v-model="task" />
    <button class="addBtn">+</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTodo: function () {
      this.$emit("addTodoItem", this.task);
      // let localItem = JSON.parse(localStorage.getItem("todo"));
      // const todo = {
      //   task: this.task,
      //   id: new Date(),
      //   isCompleted: true,
      // };
      // if (localItem) {
      //   localItem.push(todo);
      // } else {
      //   localItem = [todo];
      // }
      // console.log(localItem);
      // localStorage.setItem("todo", JSON.stringify(localItem));
      this.clearInput();
    },
    clearInput: function () {
      this.task = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: center;
}
.addBtn {
  border: 0;
  border-radius: 0 5px 5px 0;
  width: 3rem;
  height: 100%;
  font-size: 2rem;
  color: white;
  background: #6478fb;
}
</style>
