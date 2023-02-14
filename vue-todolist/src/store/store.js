import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";
// import * as getters from ./modules/mutations;
// import * as mutations from "./mutations";

Vue.use(Vuex);

// const storage = {
//   fetch() {
//     let localItem = JSON.parse(localStorage.getItem("todo"));
//     console.log(localItem);
//     if (!localItem) {
//       return [];
//     }
//     return localItem;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
  // data
  // state: {
  //   todoItems: storage.fetch(),
  // },
  // // computed
  // getters,

  // // methods
  // mutations,
});
