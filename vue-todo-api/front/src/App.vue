<template>
  <div>hi</div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    console.log(process.env.VUE_APP_API);
    axios
      .post("http://localhost:5500/users/login", {
        email: "e1@naver.com",
        password: "123123aa",
      })
      .then((res) => console.log(res));
  },
};
</script>

<style></style>
