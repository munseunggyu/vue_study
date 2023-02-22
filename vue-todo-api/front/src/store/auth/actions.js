import { api } from "@/api";

export default {
  async handleSignUp({ commit }, { email, password }) {
    try {
      const response = await api.post(`users/create`, {
        email,
        password,
      });
      commit("SET_USER", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async handleSignIn({ commit }, { email, password }) {
    try {
      const response = await api.post(`users/login`, {
        email,
        password,
      });
      commit("SET_USER", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
