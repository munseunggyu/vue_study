import Vue from "vue";
import VueRouter from "vue-router";
import SignView from "../views/SignView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import { store } from "@/store";
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
      meta: {
        requiresAuth: true, // 인증이 필요한 페이지에 대한 정보를 메타 데이터로 추가합니다.
      },
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
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = store.state.auth.token !== null;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});
export default router;
