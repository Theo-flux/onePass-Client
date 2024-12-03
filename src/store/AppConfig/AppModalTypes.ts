export enum AppModals {
  EDIT_PROFILE = 'EDIT_PROFILE'
}

export type TAppModalsAction =
  | { name?: undefined }
  | { name: ''; open?: boolean }
  | ({ name: AppModals.EDIT_PROFILE } & ({ open: true } | { open?: false }));
