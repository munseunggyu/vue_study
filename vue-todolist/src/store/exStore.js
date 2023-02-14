import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const wow = new Vue.Store({
  state: {
    price: 1000,
  },
  getters: {
    originPrice(state) {
      return state;
    },
    doublePrice(state) {
      return state * 2;
    },
    triplePrice(state) {
      return state * 3;
    },
  },
});
