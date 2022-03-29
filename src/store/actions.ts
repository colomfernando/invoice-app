import { Invoice, Theme } from './types';
import types from './actionTypes';

export const actionSaveInvoice = (payload: Invoice) => ({
  type: types.SAVE_INVOICE,
  payload,
});

export const actionSetTheme = (payload: Theme) => ({
  type: types.SET_THEME,
  payload,
});
