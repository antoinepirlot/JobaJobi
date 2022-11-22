import { createRouter, createWebHistory } from "vue-router";
import CreateJobOfferView from "../views/CreateJobOfferView.vue";
import HomePageView from "../views/HomePageView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import MyOffersView from "../views/MyOffersView.vue";
import LogoutView from '../views/LogoutView.vue';
import FavoritesView from "@/views/FavoritesView.vue";
import JobOfferDetailsView from '../views/JobOfferDetailsView.vue'
import api_requests from "@/utils/api_requests";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not found",
      component: HomePageView,
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
      meta: {
        requiresAuth: true,
        requiresCompany: true
      }
    },
    {
      path: '/jobOfferDetails/:id',
      name: 'jobOfferDetails',
      component: JobOfferDetailsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: "/signup",
      name: "sign up",
      component: SignUpView,
    },
    {
      path: "/myOffers",
      name: "myOffers",
      component: MyOffersView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView
    }
  ],
});

router.beforeEach(async (to, from) => {
  if(to.meta.requiresAuth && !localStorage.getItem("token")) return { name: 'login' }
  
  if(to.meta.requiresCompany){
    const user = await api_requests.getUserByToken();
    if(user.type !== "Entreprise") return { name: 'home'}
  } 
})

export default router;
