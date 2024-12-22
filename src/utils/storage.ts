import store from 'store2';

export const authPersist = <T = string>(key: string, data: T) => {
  store.namespace('_auth').local.set(key, data);
  return data;
};

export const authGet = <T = string>(key: string, fallback?: T) => {
  return store.namespace('_auth').local.get(key, fallback) as T;
};

export const authDel = <T = string>(key: string, fallback?: T) => {
  return store.namespace('_auth').local.remove(key, fallback) as T;
};
