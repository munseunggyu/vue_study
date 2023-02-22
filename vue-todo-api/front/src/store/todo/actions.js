import axios from "axios";
import { store } from "../index";
export default {
  async addTodo(context, { title, content }) {
    try {
      const response = await axios.post(
        `${process.env.VUE_APP_API}todos`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: store.state.auth.token,
          },
        }
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getTodos({ commit }) {
    axios
      .get(`${process.env.VUE_APP_API}todos`, {
        headers: {
          Authorization: store.state.auth.token,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        commit("SET_TODOS", res.data.data);
      });
  },
};
