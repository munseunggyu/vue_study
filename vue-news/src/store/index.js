import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: null,
    item: null,
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchUser(state) {
      return state.user;
    },
    fetchItem(state) {
      return state.item;
    },
  },
  actions,
  mutations,
});

export { store };
