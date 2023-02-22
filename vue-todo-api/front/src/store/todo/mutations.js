export default {
  SET_TODOS(state, value) {
    state.todolist = value;
  },
  ADD_TODO(state, value) {
    state.todolist.push(value);
  },
  DEL_TODO(state, id) {
    state.todolist = state.todolist.filter((todo) => todo.id !== id);
  },
  TOGGLE_TODO(state, id) {
    state.todolist = state.todolist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          content: !todo.content,
        };
      } else {
        return todo;
      }
    });
  },
  changeCategory(state, value) {
    state.category = value;
  },
};
