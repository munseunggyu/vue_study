import actions from "./actions";
import mutations from "./mutations";

export const auth = {
  state: {
    token: localStorage.getItem("token") || null,
  },
  mutations,
  actions,
};
