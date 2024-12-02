import { createWebHistory, createRouter } from 'vue-router';
import Register from '@pages/auth/register/Register.vue';
import Home from '@pages/protected/home/Home.vue';
import Login from './auth/login/Login.vue';
import ROUTES from '~/constants/routes';
import ForgotPassword from './auth/forgotpwd/ForgotPassword.vue';
import ResetPassword from './auth/resetpwd/ResetPassword.vue';

const routes = [
  { path: ROUTES.REGISTER.path, component: Register },
  { path: ROUTES.LOGIN.path, component: Login },
  { path: ROUTES.FORGOT_PWD.path, component: ForgotPassword },
  { path: ROUTES.RESET_PWD.path, component: ResetPassword },
  { path: ROUTES.HOME.path, component: Home, exact: true }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
