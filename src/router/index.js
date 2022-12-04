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
      path: '/artists',
      name: "artists",
      component: () => import("../views/Artists.vue")
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import("../views/Songs.vue")
    },
    {
      path: '/songs/:id',
      name: 'song-detail',
      component: () => import("../views/SongDetail.vue")
    }
  ],
});

export default router;
