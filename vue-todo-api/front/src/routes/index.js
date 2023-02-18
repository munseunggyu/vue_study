import Vue from "vue";
import VueRouter from "vue-router";
import SignView from "../views/SignView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   redirect: "/home",
    // },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign",
      name: "sign",
      component: SignView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
