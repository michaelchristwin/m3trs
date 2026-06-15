import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/",
      component: () => import("@/layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/discover",

          component: () => import("@/views/DiscoverShellView.vue"),
          children: [
            {
              path: "",
              name: "discover",
              component: () => import("@/views/DiscoverView.vue"),
            },
            {
              path: ":tokenId",
              name: "listing details",
              component: () => import("@/views/ListingDetailsView.vue"),
            },
          ],
        },
        {
          path: "/create-token",
          name: "create token",
          component: () => import("@/views/CreateTokenView.vue"),
        },
        {
          path: "/holdings",
          component: () => import("@/views/HoldingsShellView.vue"),
          children: [
            {
              path: "",
              name: "holdings",
              component: () => import("@/views/HoldingsView.vue"),
            },
            {
              path: ":tokenName",
              name: "token details",
              component: () => import("@/views/TokenDetailsView.vue"),
            },
          ],
        },

        {
          path: "/bonds",
          name: "bonds",
          component: () => import("@/views/BondsView.vue"),
        },
      ],
    },
  ],
});

export default router;
