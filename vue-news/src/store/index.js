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
  },
  actions,
  mutations,
});

export { store };
