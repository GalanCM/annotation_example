import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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
      path: "/viewer/:pageId",
      name: "viewer",
      component: () => import("@/views/Viewer.vue")
    },
    {
      path: "/viewer",
      redirect: "/viewer/1"
    }
  ]
});
