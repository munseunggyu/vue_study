<template>
  <div id="app">
    <!-- <ToolBar></ToolBar> -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <SpinnerVue :loading="loadingStatue"></SpinnerVue>
  </div>
</template>

<script>
import SpinnerVue from "./components/SpinnerVue.vue";
import ToolBar from "./components/ToolBar.vue";
import { bus } from "./utils/bus";

export default {
  name: "App",
  data() {
    return {
      loadingStatue: false,
    };
  },
  components: {
    ToolBar,
    SpinnerVue,
  },
  methods: {
    startSpinner() {
      this.loadingStatue = true;
    },
    endSpinner() {
      this.loadingStatue = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
a {
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
