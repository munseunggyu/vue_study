<template>
  <ul>
    <li v-for="todo in this.getTodos" v-bind:key="todo.id">
      <input
        :checked="todo.content"
        type="checkbox"
        @click="
          toggleTodo({ id: todo.id, title: todo.title, content: todo.content })
        "
      />

      <span :class="{ done: todo.content }"> {{ todo.title }}</span>
      <button @click="deleteTodo(todo.id)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { bus } from "@/utils/bus";
import { mapState } from "vuex";

export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    bus.$emit("start:spinner");
    this.$store.dispatch("getTodos").then(() => {
      bus.$emit("end:spinner");
    });
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    toggleTodo({ id, title, content }) {
      this.$store.dispatch("toggleTodo", { id, title, content });
    },
  },
  computed: {
    ...mapState({
      category: (state) => state.todo.category,
      todolist: (state) => state.todo.todolist,
    }),
    getTodos() {
      if (this.category === "complete") {
        return this.todolist.filter((todo) => todo.content);
      } else if (this.category === "incomplete") {
        return this.todolist.filter((todo) => !todo.content);
      }
      return this.todolist;
    },
  },
};
</script>

<style scoped>
ul {
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
span {
  margin-right: 5px;
}
.done {
  text-decoration: line-through;
}
</style>
