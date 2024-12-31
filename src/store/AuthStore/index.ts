import { defineStore } from 'pinia';
import { Mangle } from '~/constants/mangle';
import { TRegisterSchema } from '~/pages/auth/register/validation';
import { postLogin, postRegister } from '~/requests/auth';
import initializer from '~/utils/initializer';
import { parseError } from '~/utils/parseError';
import { authPersist } from '~/utils/storage';

const LOADERS = {
  login: false,
  register: false
};

const useAuthStore = defineStore('AuthStore', {
  // states
  state: () => ({
    isLoading: { ...initializer(LOADERS, false) },
    errors: { ...initializer(LOADERS, '') }
  }),

  //  actions or methods
  actions: {
    async loginUser(payload: TLoginPayload, cb: () => void) {
      this.isLoading.login = true;
      this.errors.login = '';
      try {
        const res = await postLogin(payload);
        const { access_token, refresh_token } = res.data;

        authPersist(Mangle.ACCESS_TOKEN, access_token);
        authPersist(Mangle.REFRESH_TOKEN, refresh_token);

        cb();
      } catch (error) {
        this.errors.login = parseError(error);
      } finally {
        this.isLoading.login = false;
      }
    },

    async createUser(payload: TRegisterSchema) {
      console.log(payload);
      this.isLoading.register = true;
      this.errors.register = '';

      try {
        const response = await postRegister(payload);
        return response.data.message;
      } catch (error) {
        this.errors.register = parseError(error);
      } finally {
        this.isLoading.register = false;
      }
    }
  }
});

export default useAuthStore;
