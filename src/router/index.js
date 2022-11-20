import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateJobOfferView from "../views/CreateJobOfferView.vue";
import HomePageView from "../views/HomePageView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogoutView from '../views/LogoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not found",
      component: HomeView,
    },
    {
      path: "/",
      name: "home",
      component: HomePageView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/createJobOffer",
      name: "createJobOffer",
      component: CreateJobOfferView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "sign up",
      component: SignUpView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView
    }
  ],
});

export default router;
