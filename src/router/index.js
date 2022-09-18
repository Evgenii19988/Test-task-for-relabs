import { createRouter, createWebHashHistory } from "vue-router";
import LogIn from "../views/LoginView.vue";
import HomeLayout from "../views/HomeLayout.vue";
import MainPage from "../components/MainPage.vue";
import ShopPage from "../components/ShopPage.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/",
    name: "homeLayout",
    component: HomeLayout,
    redirect: "/login",
    children: [
      {
        path: "main",
        name: "main",
        component: MainPage,
      },
      {
        path: "shop",
        name: "shop",
        component: ShopPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
