import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('@/views/SignUpView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
