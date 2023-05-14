import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import("../views/HomeView.vue");
const EditWishItem = () => import("../views/HomeView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: 'edit', component: EditWishItem },
      ]
    },
  ]
})

export default router
