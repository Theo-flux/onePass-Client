import { defineStore } from 'pinia';
import { AppModals, TAppModalsAction } from './AppModalTypes';
import initializer from '~/utils/initializer';

const INIT_IS_OPEN = initializer(AppModals, false);

export const useAppConfig = defineStore('AppConfigStore', {
  // states
  state: () => ({ nonce: 0, isOpen: { ...INIT_IS_OPEN } }),

  // getters or computed
  getters: {},

  // actions or methods
  actions: {
    setModalOpenState(name: AppModals, open?: boolean) {
      this.isOpen[name] = typeof open === 'undefined' ? !this.isOpen[name] : open;
    },
    toggleModals(modal: TAppModalsAction = {}) {
      switch (modal.name) {
        case '':
          break;

        default:
          break;
      }

      if (modal.name && AppModals[modal.name] !== undefined) {
        this.setModalOpenState(modal.name, modal.open);
      }

      this.nonce = Date.now() + Math.random();
    }
  }
});
