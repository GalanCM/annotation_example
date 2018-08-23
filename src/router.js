import Vue from "vue";
import Router from "vue-router";

import Pages from "@/pages.js";

Vue.use(Router);

let pages = Pages.map(page => {
  return {
    ...page,
    path: page.name
  };
});
pages.push({ path: "", redirect: pages[0].path });

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/viewer",
      name: "viewer",
      component: () => import("@/views/Viewer.vue"),
      children: pages
    }
  ]
});
