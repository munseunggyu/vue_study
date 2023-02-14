<template>
  <transition-group name="list" tag="ul">
    <li
      class="shadow"
      v-for="{ task, id, isCompleted } in this.storeTodoLen"
      v-bind:key="task"
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
  </transition-group>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["propsdata"],
  computed: {
    // todoItems() {
    //   return this.$store.getters.storeTodoLen;
    // },
    ...mapGetters(["storeTodoLen"]),
  },
  methods: {
    ...mapMutations({
      delItem: "delItem",
      toggleCom: "toggleCom",
    }),
    // delItem(id) {
    //   // const newTodo = this.todoItems.filter((todo) => {
    //   //   return todo.id !== id;
    //   // });
    //   // this.todoItems = newTodo;
    //   // localStorage.setItem("todo", JSON.stringify(newTodo));
    //   // this.$emit("delItem", id);
    //   this.$store.commit("delItem", id);
    // },
    // toggleCom(id) {
    //   // this.$emit("toggleCom", id);
    //   this.$store.commit("toggleCom", id);
    //   // isCompleted = !isCompleted;
    //   // console.log(isCompleted);
    //   // const newTodo = this.todoItems.map((todo) => {
    //   //   if (todo.id === id) {
    //   //     return {
    //   //       ...todo,
    //   //       isCompleted: !todo.isCompleted,
    //   //     };
    //   //   } else {
    //   //     return todo;
    //   //   }
    //   // });
    //   // localStorage.setItem("todo", JSON.stringify(newTodo));
    // },
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
/* list item transition effect */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
