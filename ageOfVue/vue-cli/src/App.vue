<template>
  <div>
    <p>{{ str }}</p>
    <!-- <AppHeader v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></AppHeader> -->
    <AppHeader v-bind:propsdata="str" v-on:renew="renewStr"></AppHeader>
    <!-- <AppHeader str="str"></AppHeader> -->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data: function () {
    return {
      str: "hi",
    };
  },
  methods: {
    renewStr: function () {
      this.str = "wow";
    },
  },
};
</script>

<style></style>
<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
