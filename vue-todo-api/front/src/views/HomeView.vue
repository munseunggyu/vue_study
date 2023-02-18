<template>
  <main>
    <h2>ToDoList</h2>
    <create-todo></create-todo>
    <select-vue></select-vue>
    <item-list></item-list>
  </main>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import CreateTodo from "@/components/CreateTodo.vue";
import SelectVue from "@/components/SelectVue.vue";

export default {
  components: {
    ItemList,
    CreateTodo,
    SelectVue,
  },
};
</script>

<style scoped>
main {
  margin: 10px;
}
h2 {
  margin-bottom: 5px;
  font-weight: 600;
}
</style>
