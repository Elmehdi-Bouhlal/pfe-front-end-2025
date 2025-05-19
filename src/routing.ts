import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Pacakges from "./views/Pacakges.vue";
import Checkout from "./views/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Keazon Books - Home'
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: 'Keazon Books - Profile'
    }
  },
  {
    path: "/packages",
    name: "packages",
    component: Pacakges,
    meta: {
      title: 'Keazon Books - Packages'
    }
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: {
      title: 'Keazon Books - Checkout'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
