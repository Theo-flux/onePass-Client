import { defineStore } from 'pinia';
import { AppModals, TAppModalsAction } from './AppModalTypes';
import initializer from '~/utils/initializer';

const useAppConfigStore = defineStore('AppConfigStore', {
  // states
  state: () => ({
    nonce: 0,
    isOpen: { ...initializer(AppModals, false) }
  }),

  // actions or methods
  actions: {
    setModalOpenState(name: AppModals, open?: boolean) {
      this.isOpen[name] = typeof open === 'undefined' ? !this.isOpen[name] : open;

      this.nonce = Date.now() + Math.random();
    },

    toggleModals(modal?: TAppModalsAction) {
      if (!modal || modal.name === '') {
        return;
      }

      if (modal.name && AppModals[modal.name] !== undefined) {
        this.setModalOpenState(modal.name, modal.open);
      }
    }
  }
});

export default useAppConfigStore;
