export default {
  SET_USER(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
  },
};
