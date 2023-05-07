import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.js";

console.log("Mode", import.meta.env.MODE);
console.log("BASE_URL", import.meta.env.BASE_URL);
console.log("PROD", import.meta.env.PROD);
console.log("DEV", import.meta.env.DEV);
console.log("SSR", import.meta.env.SSR);
console.log("env", import.meta.env.VITE_APP_API_URL);
