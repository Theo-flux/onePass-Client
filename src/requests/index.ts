import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { authGet } from '../utils/storage';
import { API } from '../constants/api';
import { getRefreshToken } from '../requests/auth';
import { Mangle } from '../constants/mangle';

const server = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    Accept: 'application/json'
  }
});

const resourceReqInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = authGet(Mangle.ACCESS_TOKEN);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};

const resourceReqErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

const resourceResInteceptor = (res: AxiosResponse) => {
  return res;
};

server.interceptors.response.use(resourceResInteceptor, async (error) => {
  if (error.response) {
    const originalRequest = error.config;

    // use refresh token when error is 403
    if ([403, 401].includes(error.response.status) && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh_token = authGet(Mangle.REFRESH_TOKEN);
      const tokenObj: TUserAccessToken = { access_token: '', refresh_token: '' };

      if (refresh_token) {
        await getRefreshToken(refresh_token)
          .then((res: TUserAccessToken) => {
            tokenObj.access_token = res.access_token;
            tokenObj.refresh_token = res.refresh_token;
            return;
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
      const { access_token } = tokenObj;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return server(originalRequest);
    }
  }
  return Promise.reject(error);
});

server.interceptors.request.use(resourceReqInterceptor, resourceReqErrorInterceptor);
export default server;
