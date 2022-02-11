import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../views/Homepage.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/Users.vue"),
      meta: {
        auth: true,
      },
    },
    {
      path: "/users/:userId", // /users/:userId
      name: "user",
      component: () => import("../views/User.vue"),
      props: true,
    },
    {
      path: "/users/:userId/shows", // /users/:userId/shows
      name: "userShows",
      component: () => import("../views/UserShows.vue"),
      props: true,
    },
    {
      path: "/users/:userId/shows/:showId", // /users/:userId/shows/:showId
      name: "userShow",
      component: () => import("../views/UserShow.vue"),
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // User pas connecté et route nécessite auth => /login
  if (to.meta?.auth && !userStore.isAuthenticated) next({ name: "login" });
  // User connecté mais route ne nécessite pas auth => /
  else if (!to.meta?.auth && userStore.isAuthenticated)
    next({ name: homepage });
  // Connecté et route nécessite auth
  else next();
});

export default router;
