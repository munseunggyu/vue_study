import { fetchList } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  actions: {
    // 비동기 처리
    async FETCH_DATA(context, payload) {
      const data = await fetchList(`${payload}/1.json`);
      if (payload.includes("news")) {
        context.commit("SET_NEWS", data); // mutation의 SET_NEWS 실행
      } else if (payload.includes("ask")) {
        context.commit("SET_ASK", data);
      } else if (payload.includes("jobs")) {
        context.commit("SET_JOBS", data);
      }
    },
  },
  mutations: {
    SET_NEWS(state, newsData) {
      state.news = newsData;
    },
    SET_ASK(state, askData) {
      state.ask = askData;
    },
    SET_JOBS(state, jobsData) {
      state.jobs = jobsData;
    },
  },
});

export { store };
