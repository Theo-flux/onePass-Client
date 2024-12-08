export enum AppModals {
  EDIT_PROFILE = 'EDIT_PROFILE',
  CHANGE_MASTER_PWD = 'CHANGE_MASTER_PWD',
  ADD_NEW_MODAL = 'ADD_NEW_MODAL',
  GENERATE_PWD = 'GENERATE_PWD'
}

export type TAppModalsAction =
  | { name?: undefined }
  | { name: ''; open?: boolean }
  | ({
      name: AppModals.EDIT_PROFILE | AppModals.CHANGE_MASTER_PWD | AppModals.ADD_NEW_MODAL;
    } & ({ open: true } | { open?: false }))
  | ({
      name: AppModals.GENERATE_PWD;
    } & ({ open: true } | { open?: false }));
