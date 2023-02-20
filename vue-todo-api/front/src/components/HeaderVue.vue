<template>
  <header>
    <h1>
      <router-link to="/"> To Do!! </router-link>
    </h1>
    <div class="right">
      <router-link v-if="!token" to="/login">login</router-link>
      <router-link v-if="!token" to="/sign">Sign</router-link>
      <button v-if="token" @click="logout">로그아웃</button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("logout");
      alert("로그아웃 되었습니다.");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  padding: 1.2rem;
  background: #41b883;
  height: 70px;
}
h1 {
  color: white;
  font-size: 25px;
  font-weight: 800;
}
.right {
  float: right;
  margin-right: 30px;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}
a {
  margin-left: 8px;
  color: white;
  text-decoration: none;
}
button {
  border: 0;
  background: transparent;
  color: white;
}
</style>
