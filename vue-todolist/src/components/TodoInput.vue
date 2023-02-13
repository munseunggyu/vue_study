<template>
  <form class="inputBox shadow" v-on:submit.prevent="addTodo">
    <input type="text" v-model="task" />
    <button class="addBtn">+</button>
    <AlertModalVue v-if="showModal" @close="showModal = false">
      <h3 slot="header">할 일을 입력해 주세요.</h3>
      <span slot="body">Yes</span>
      <!-- <span slot="footer" >No</span> -->
    </AlertModalVue>
  </form>
</template>

<script>
import AlertModalVue from "./common/AlertModal.vue";

export default {
  data() {
    return {
      task: "",
      showModal: false,
    };
  },

  methods: {
    addTodo: function () {
      if (this.task === "") {
        this.showModal = !this.showModal;
      } else {
        this.$emit("addTodoItem", this.task);
        this.clearInput();
      }
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
    },
    clearInput: function () {
      this.task = "";
    },
  },
  components: {
    AlertModalVue,
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
