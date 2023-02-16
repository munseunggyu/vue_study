<template>
  <div id="app">
    <!-- <ToolBar></ToolBar> -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "App",
  components: {
    ToolBar,
  },
};
</script>

<style></style>
