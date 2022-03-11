import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../views/Top.vue"),
  },
  {
    path: "/friendRecruitmenBbs",
    component: () => import("../views/FriendRecruitmentBbs.vue"),
  },
  {
    path: "/reportBbs",
    component: () => import("../views/ReportBbs.vue"),
  },
  {
    path: "/eventCapture",
    component: () => import("../views/EventCapture.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
