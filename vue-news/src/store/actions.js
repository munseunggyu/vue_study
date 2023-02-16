import { fetchItem, fetchList, fetchUser } from "@/api";

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
  async FETCH_USER(context, payload) {
    const userData = await fetchUser(payload);
    context.commit("SET_USER", userData);
  },
  async FETCH_ITEM(context, payload) {
    const itemData = await fetchItem(payload);
    context.commit("SET_ITEM", itemData);
  },
};
