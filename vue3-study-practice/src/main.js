import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import funcPlugin from "./plugins/func";
import objPlugins from "./plugins/obj";
import person from "./plugins/person";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);
app.use(objPlugins, "objPlugins options");
app.use(funcPlugin);
app.use(person, { name: "wow" }); // created 훅에서 사용가능 setup에서 바로 사용 불가, options로 변경함
app.use(router);
app.mount("#app");

// console.log("Mode", import.meta.env.MODE);
// console.log("BASE_URL", import.meta.env.BASE_URL);
// console.log("PROD", import.meta.env.PROD);
// console.log("DEV", import.meta.env.DEV);
// console.log("SSR", import.meta.env.SSR);
// console.log("env", import.meta.env.VITE_APP_API_URL);
