import { createRouter, createWebHistory } from 'vue-router'

import BoardView from '../views/BoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Task Board',
      component: BoardView,
    },
  ],
})

export default router
