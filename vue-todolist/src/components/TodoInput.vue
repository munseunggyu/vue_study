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
      console.log(this.task);
      localStorage.setItem(
        "todo",
        JSON.stringify({
          task: this.task,
          id: new Date(),
        })
      );
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
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addBtn {
  border: 0;
  border-radius: 0 5px 5px 0;
  width: 3rem;
  height: 100%;
  float: right;
  font-size: 2rem;
  color: white;
  background: #6478fb;
}
</style>
