import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: '/',
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '../views/index.vue'),
  },
  { path: '/register',
    name: "Register",
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue'),
  },
  { path: '/login',
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router;