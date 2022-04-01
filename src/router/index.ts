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
  {
    path: "/questionnaire",
    component: () => import("../views/Questionnaire.vue"),
  },
  {
    path: "/checkPage",
    component: () => import("../views/CheckPage.vue"),
  },
  {
    path: "/calcTreasurePage",
    component: () => import("../views/CalcTreasurePage.vue"),
  },
  {
    path: "/companyOverview",
    component: () => import("../views/CompanyOverview.vue"),
  },
  {
    path: "/employeeInfo",
    component: () => import("../views/EmployeeInfo.vue"),
  },
  {
    path: "/inquiry",
    component: () => import("../views/Inquiry.vue"),
  },
  {
    path: "/question",
    component: () => import("../views/Question.vue"),
  },
  {
    path: "/privacy",
    component: () => import("../views/Privacy.vue"),
  },
  {
    path: "/silhouette",
    component: () => import("../views/Silhouette.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
