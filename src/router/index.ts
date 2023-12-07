import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import("../views/QuizView.vue"),
    },
    {
      path: "/ng",
      name: "ng",
      component: () => import("../views/NgView.vue"),
    },
    {
      path: "/ok",
      name: "ok",
      component: () => import("../views/OkView.vue"),
    },
  ],
});

export default router;
