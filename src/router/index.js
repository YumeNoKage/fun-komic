import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/genre",
    name: "genre",
    component: () =>
      import("../components/Genre/Genre.vue")
  },
  {
    path: "/manhua",
    name: "manhua",
    component: () =>
      import("../views/Manhua.vue")
  },
  {
    path: "/manhwa",
    name: "manhwa",
    component: () =>
      import("../views/Manhwa.vue")
  },
  {
    path: "/detail/:slug",
    name: "detail-manga",
    component: () =>
      import("../components/DetailKomic/DetailKomic.vue")
  },
  {
    path: "/:baca/:komic/:chapter",
    name: "baca-komic",
    component: () =>
      import("../components/BacaKomic/BacaKomic.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
