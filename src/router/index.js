import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: (to) => {
        return { path: "/detail" };
      },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/detail.vue"),
      children: [{
        path: "/detail1",
        name: "detail1",
        component: () => import("../components/detail1.vue"),
      }]
    },
  ],
});

export default router;
