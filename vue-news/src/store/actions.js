import { fetchList } from "@/api";

export default {
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
};
