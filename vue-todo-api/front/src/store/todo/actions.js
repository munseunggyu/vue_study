import { api } from "@/api";
export default {
  async addTodo({ commit }, { title }) {
    try {
      const todoData = {
        title,
        content: false,
      };
      const response = await api.post("todos", todoData);
      commit("ADD_TODO", response.data.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async getTodos({ commit }) {
    try {
      const response = await api.get(`todos`);
      commit("SET_TODOS", response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteTodo({ commit }, id) {
    api.delete(`todos/${id}`).then(() => {
      commit("DEL_TODO", id);
    });
  },
  async toggleTodo({ commit }, { id, title, content }) {
    api
      .put(`todos/${id}`, {
        title,
        content: !content,
      })
      .then(() => {
        commit("TOGGLE_TODO", id);
      });
  },
};
