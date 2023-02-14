import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    let localItem = JSON.parse(localStorage.getItem("todo"));
    console.log(localItem);
    if (!localItem) {
      return [];
    }
    return localItem;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    storeTodoLen(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, value) {
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
      state.todoItems.push(todo);
    },
    delItem(state, id) {
      state.todoItems = state.todoItems.filter((todo) => {
        return todo.id !== id;
      });
      localStorage.setItem("todo", JSON.stringify(state.todoItems));
    },
    toggleCom(state, id) {
      state.todoItems = state.todoItems.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });
      localStorage.setItem("todo", JSON.stringify(state.todoItems));
      // state.todoItems = [...newTodo];
    },
    clearAllItems(state) {
      localStorage.removeItem("todo");
      state.todoItems = [];
    },
  },
});
