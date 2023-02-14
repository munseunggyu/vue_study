import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";

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
  // data
  state: {
    todoItems: storage.fetch(),
  },
  // computed
  getters,

  // methods
  mutations,
});
