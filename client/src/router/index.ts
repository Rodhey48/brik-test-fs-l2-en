import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from "../views/Login.vue";

// Fungsi untuk memeriksa autentikasi
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Mengembalikan true jika token ada, false jika tidak ada
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }  // Menandai bahwa route ini memerlukan autentikasi
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ]
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      console.log('Not authenticated, redirecting to /login'); // Debugging
      next('/login');  // Redirect ke halaman login
    } else {
      console.log('Authenticated, proceeding to route'); // Debugging
      next();  // Lanjutkan ke route yang diinginkan
    }
  } else {
    console.log('No authentication required, proceeding to route'); // Debugging
    next();  // Lanjutkan ke route yang diinginkan jika tidak memerlukan autentikasi
  }
});

export default router;
