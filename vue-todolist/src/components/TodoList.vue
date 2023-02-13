<template>
  <ul>
    <li
      class="shadow"
      v-for="{ task, id, isCompleted } in propsdata"
      v-bind:key="id"
    >
      <button
        class="checkBtn"
        v-bind:class="{ checkBtnCompleted: isCompleted }"
        v-on:click="toggleCom(id)"
      ></button>
      <span v-bind:class="{ textCompleted: isCompleted }">
        {{ task }}
      </span>
      <button class="removeBtn" v-on:click="delItem(id)">x</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    delItem: function (id) {
      // const newTodo = this.todoItems.filter((todo) => {
      //   return todo.id !== id;
      // });
      // this.todoItems = newTodo;
      // localStorage.setItem("todo", JSON.stringify(newTodo));
      this.$emit("delItem", id);
    },
    toggleCom: function (id) {
      this.$emit("toggleCom", id);
      // isCompleted = !isCompleted;
      // console.log(isCompleted);
      // const newTodo = this.todoItems.map((todo) => {
      //   if (todo.id === id) {
      //     return {
      //       ...todo,
      //       isCompleted: !todo.isCompleted,
      //     };
      //   } else {
      //     return todo;
      //   }
      // });
      // localStorage.setItem("todo", JSON.stringify(newTodo));
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  /* padding-left: 0.9rem; */
  background: white;
  border-radius: 5px;
  justify-content: space-between;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.checkBtnCompleted {
  background: #b3adad;
  color: black;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkBtnCompleted::after {
  content: "v";
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  border: 0;
  border-radius: 0 5px 5px 0;
  width: 3rem;
  height: 100%;
  font-size: 2rem;
  color: white;
  background: #6478fb;
}
</style>
