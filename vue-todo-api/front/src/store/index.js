import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth";
import { todo } from "./todo";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo,
    auth,
  },
});

export { store };
