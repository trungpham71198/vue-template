import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@layouts/MainLayout.vue'
export const routes = [
  {
    path: '/',
    component: MainLayout,
    requiresAuth: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@pages/DashBoard.vue'),
        meta: {
          requiresAuth: true,
          headerTitle: 'Dashboard',
          searchConfig: {},
          storeConfig: {},
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page Not Found',
    component: () => import('@pages/NotFound.vue'),
  },

  {
    path: '/error',
    name: 'Error',
    component: () => import('@pages/Error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async () => {
  // check auth
})
export default router
