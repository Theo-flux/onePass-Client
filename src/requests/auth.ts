import { parseError } from '~/utils/parseError';
import server from '.';
import { AUTH } from '~/constants/api';
import { TRegisterSchema } from '~/pages/auth/register/validation';

// get
export const getUser = async () => {
  return;
};

export const getVerify = async () => {
  return;
};

export const getResendVerify = async () => {
  return;
};

export const getRefreshToken = async (refresh_token: string) => {
  try {
    const url = AUTH.REFRESH_TOKEN.replace(':rt', refresh_token);
    const res = await server.get<TUserAccessToken>(url);
    return res.data;
  } catch (error) {
    throw parseError(error);
  }
};

// post
export const postLogin = async (payload: TLoginPayload) =>
  server.post<TUserAccessToken>(AUTH.LOGIN, payload);

export const postRegister = async (payload: TRegisterSchema) =>
  server.post<{ message: string }>(AUTH.REGISTER, payload);

export const postForgotPwd = async () => {
  return;
};

// patch
export const patchResetPwd = async () => {
  return;
};
