<template>
  <ul>
    <li v-for="todo in this.$store.state.todo.todolist" v-bind:key="todo.id">
      <!-- <input type="checkbox" /> -->
      <span> 제목: {{ todo.title }}</span>
      <p>내용: {{ todo.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.$store.dispatch("getTodos");
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
</style>
