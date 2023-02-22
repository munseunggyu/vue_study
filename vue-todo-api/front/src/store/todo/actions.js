import axios from "axios";
import { store } from "../index";
export default {
  async addTodo({ commit }, { title }) {
    try {
      const response = await axios.post(
        `${process.env.VUE_APP_API}todos`,
        {
          title,
          content: false,
        },
        {
          headers: {
            Authorization: store.state.auth.token,
          },
        }
      );
      commit("ADD_TODO", response.data.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getTodos({ commit }) {
    try {
      const response = await axios.get(`${process.env.VUE_APP_API}todos`, {
        headers: {
          Authorization: store.state.auth.token,
        },
      });
      commit("SET_TODOS", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo({ commit }, id) {
    axios
      .delete(`${process.env.VUE_APP_API}todos/${id}`, {
        headers: {
          Authorization: store.state.auth.token,
        },
      })
      .then(() => {
        commit("DEL_TODO", id);
      });
  },
  async toggleTodo({ commit }, { id, title, content }) {
    axios
      .put(
        `${process.env.VUE_APP_API}todos/${id}`,
        {
          title,
          content: !content,
        },
        {
          headers: {
            Authorization: store.state.auth.token,
          },
        }
      )
      .then(() => {
        commit("TOGGLE_TODO", id);
      });
  },
};
