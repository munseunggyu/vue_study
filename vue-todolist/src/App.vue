<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:delItem="delItem"
      v-on:toggleCom="toggleCom"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoFooter,
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todoItems: [],
    };
  },

  // 라이플 사이클 생성되는 시점에 실행
  created: function () {
    let localItem = JSON.parse(localStorage.getItem("todo"));
    if (localItem) {
      this.todoItems = [...localItem];
    }
  },
  methods: {
    addOneItem: function (value) {
      let localItem = JSON.parse(localStorage.getItem("todo"));
      const todo = {
        task: value,
        id: new Date(),
        isCompleted: true,
      };
      if (localItem) {
        localItem.push(todo);
      } else {
        localItem = [todo];
      }
      localStorage.setItem("todo", JSON.stringify(localItem));
      this.todoItems = [...localItem];
    },
    delItem: function (id) {
      const newTodo = this.todoItems.filter((todo) => {
        return todo.id !== id;
      });
      this.todoItems = [...newTodo];
      localStorage.setItem("todo", JSON.stringify(newTodo));
    },
    toggleCom: function (id) {
      const newTodo = this.todoItems.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });
      localStorage.setItem("todo", JSON.stringify(newTodo));
      this.todoItems = [...newTodo];
    },
    clearAllItems: function () {
      console.log("first");
      localStorage.removeItem("todo");
      this.todoItems = [];
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
