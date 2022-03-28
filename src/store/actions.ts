import { Invoice } from './types';
import types from './actionTypes';

export const actionSaveInvoice = (payload: Invoice) => ({
  type: types.SAVE_INVOICE,
  payload,
});
