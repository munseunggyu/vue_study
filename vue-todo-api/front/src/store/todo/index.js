import actions from "./actions";
import mutations from "./mutations";

export const todo = {
  state: {
    todolist: [],
    category: "all",
  },
  actions,
  mutations,
};
