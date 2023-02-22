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
};
