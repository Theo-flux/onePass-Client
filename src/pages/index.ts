import { createWebHistory, createRouter } from 'vue-router';
import Register from '@pages/auth/register/Register.vue';
import Home from '@pages/protected/home/Home.vue';

const routes = [
  { path: '/auth/register', component: Register },
  { path: '/', component: Home, exact: true }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
