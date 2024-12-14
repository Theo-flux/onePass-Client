export enum AppModals {
  EDIT_PROFILE = 'EDIT_PROFILE',
  CHANGE_MASTER_PWD = 'CHANGE_MASTER_PWD',
  ADD_NEW_MODAL = 'ADD_NEW_MODAL',
  GENERATE_PWD = 'GENERATE_PWD',
  ITEM_DETAILS_MODAL = 'ITEM_DETAILS_MODAL',
  UPDATE_ITEM_MODAL = 'UPDATE_ITEM_MODAL'
}

export type TAppModalsAction =
  | { name?: undefined }
  | { name: ''; open?: boolean }
  | ({
      name:
        | AppModals.EDIT_PROFILE
        | AppModals.CHANGE_MASTER_PWD
        | AppModals.ADD_NEW_MODAL
        | AppModals.GENERATE_PWD;
    } & ({ open: true } | { open?: false }))
  | ({
      name: AppModals.ITEM_DETAILS_MODAL | AppModals.UPDATE_ITEM_MODAL;
    } & ({ open: true; id: string } | { open?: false }));
