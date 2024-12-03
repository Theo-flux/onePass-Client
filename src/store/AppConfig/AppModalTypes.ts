export enum AppModals {
  EDIT_PROFILE = 'EDIT_PROFILE',
  CHANGE_MASTER_PWD = 'CHANGE_MASTER_PWD'
}

export type TAppModalsAction =
  | { name?: undefined }
  | { name: ''; open?: boolean }
  | ({ name: AppModals.EDIT_PROFILE | AppModals.CHANGE_MASTER_PWD } & (
      | { open: true }
      | { open?: false }
    ));
