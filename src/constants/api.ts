export const API = {
  BASE_URL: import.meta.env.VITE_API_URL
};

export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REFRESH_TOKEN: '/auth/refresh/:rt'
};
