import Vue from "vue";
import VueRouter from "vue-router";
// import NewsView from "../views/NewsView.vue";
// import AskView from "../views/AskView.vue";
// import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "@/views/CreateListView";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",

      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
    },
    {
      path: "/ask",
      component: createListView("AskView"),
    },
    {
      path: "/jobs",
      component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});

export default router;
