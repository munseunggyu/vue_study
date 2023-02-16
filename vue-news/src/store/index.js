import { fetchList } from "@/api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
  },
  actions: {
    // 비동기 처리
    async FETCH_NEWS(context) {
      const newsData = await fetchList("news/1.json");
      console.log(newsData);
      context.commit("SET_NEWS", newsData); // mutation의 SET_NEWS 실행
    },
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
  },
});

export { store };
