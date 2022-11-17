import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateJobOfferView from '../views/CreateJobOfferView.vue'
import JobOfferDetailsView from '../views/JobOfferDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/createJobOffer',
      name: 'createJobOffer',
      component: CreateJobOfferView
    },
    {
      path: '/jobOfferDetails/:id',
      name: 'jobOfferDetails',
      component: JobOfferDetailsView
    },
  ]
})

export default router
