import { createRouter, createWebHistory } from "vue-router";
import CreateJobOfferView from "../views/CreateJobOfferView.vue";
import HomePageView from "../views/HomePageView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import MyOffersView from "../views/MyOffersView.vue";
import LogoutView from "../views/LogoutView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import JobOfferDetailsView from "../views/JobOfferDetailsView.vue";
import api_requests from "@/utils/api_requests";
import utils from "@/utils/utils";
import { useCounterStore } from "@/stores/counterPages";
import ProfilePageView from "../views/ProfilePageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not found",
      component: HomePageView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      name: "home",
      component: HomePageView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/createJobOffer",
      name: "createJobOffer",
      component: CreateJobOfferView,
      meta: {
        requiresAuth: true,
        requiresCompany: true,
      },
    },
    {
      path: "/jobOfferDetails/:id",
      name: "jobOfferDetails",
      component: JobOfferDetailsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresNotConnected: true,
      },
    },
    {
      path: "/signup",
      name: "sign up",
      component: SignUpView,
      meta: {
        requiresNotConnected: true,
      },
    },
    {
      path: "/myOffers",
      name: "myOffers",
      component: MyOffersView,
      meta: {
        requiresAuth: true,
        requiresCompany: true,
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePageView,
      // meta: {
      //   requiresAuth: true,
      //   requiresParticular: true,
      // },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const store = useCounterStore();
  store.increment();
  if (to.meta.requiresAuth && !utils.isConnected()) return { name: "login" };

  if (to.meta.requiresNotConnected && utils.isConnected())
    return { name: "home" };

  if (to.meta.requiresCompany) {
    const user = await api_requests.getUserByToken();
    if (user.type !== "Entreprise") return { name: "home" };
  }
  if (to.meta.requiresParticular) {
    const user = await api_requests.getUserByToken();
    if (user.type !== "Particulier") return { name: "home" };
  }
});
export default router;
