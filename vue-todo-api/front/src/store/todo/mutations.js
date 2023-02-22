export default {
  SET_TODOS(state, value) {
    state.todolist = value;
  },
  ADD_TODO(state, value) {
    state.todolist.push(value);
  },
  DEL_TODO(state, id) {
    state.todolist = state.todolist.filter((v) => v.id !== id);
  },
  TOGGLE_TODO(state, id) {
    state.todolist = state.todolist.map((v) => {
      if (v.id === id) {
        return {
          ...v,
          content: !v.content,
        };
      } else {
        return v;
      }
    });
  },
  changeCategory(state, value) {
    state.category = value;
  },
};
