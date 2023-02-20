import axios from "axios";

export default {
  async handleSignUp({ commit }, { email, password }) {
    try {
      const response = await axios.post(
        `${process.env.VUE_APP_API}users/create`,
        {
          email,
          password,
        }
      );
      commit("SET_USER", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async handleSignIn({ commit }, { email, password }) {
    try {
      const response = await axios.post(
        `${process.env.VUE_APP_API}users/login`,
        {
          email,
          password,
        }
      );
      commit("SET_USER", response.data.token);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
