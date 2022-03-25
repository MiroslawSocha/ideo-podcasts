import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/bookmarks",
    name: "Bookmarks",
    component: () => import("../views/Bookmarks.vue"),
  },
  {
    path: "/starred",
    name: "Starred",
    component: () => import("../views/Starred.vue"),
  },
  {
    path: "/podcast/2",
    name: "Podcast",
    component: () => import("../views/Podcast.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
