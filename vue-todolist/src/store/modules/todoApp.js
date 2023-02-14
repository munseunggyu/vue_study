import * as gettersa from "./mutationsa";
import * as mutationsa from "./mutationsa";

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
const state = {
  todoItems: storage.fetch(),
};
const getters = gettersa;

const mutations = mutationsa;

export default {
  state,
  getters,
  mutations,
};
