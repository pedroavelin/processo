/**
 * router/index.ts
 *
 * Manual route configuration
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { components } from 'vuetify/dist/vuetify-labs.js'
import HomePage from '@/pages/HomePage.vue'
import LoginView from '@/pages/LoginView.vue'
import PerfilView from '@/pages/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Perfil',
    name: 'Perfl',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
