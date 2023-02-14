export const addOneItem = (state, value) => {
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
};

export const delItem = (state, id) => {
  state.todoItems = state.todoItems.filter((todo) => {
    return todo.id !== id;
  });
  localStorage.setItem("todo", JSON.stringify(state.todoItems));
};

export const toggleCom = (state, id) => {
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
};

export const clearAllItems = (state) => {
  localStorage.removeItem("todo");
  state.todoItems = [];
};
