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
    path: "/manga",
    name: "manga",
    component: () =>
      import("../views/Manga.vue")
  },
  {
    path: "/manga/:slug",
    name: "detail-manga",
    component: () =>
      import("../components/DetailKomic/DetailKomic.vue")
  },
  {
    path: "/manhua",
    name: "manhua",
    component: () =>
      import("../views/Manhua.vue")
  },
  {
    path: "/manhua/:slug",
    name: "detail-manhua",
    component: () =>
      import("../components/DetailKomic/DetailKomic.vue")
  },
  {
    path: "/manhwa",
    name: "manhwa",
    component: () =>
      import("../views/Manhwa.vue")
  },
  {
    path: "/manhwa/:slug",
    name: "detail-manhwa",
    component: () =>
      import("../components/DetailKomic/DetailKomic.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
