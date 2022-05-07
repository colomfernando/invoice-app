import { State, Actions, Theme } from './types';
import types from './actionTypes';

const initialState = {
  invoices: [],
  theme: '' as Theme,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.SAVE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      } as State;

    case types.EDIT_INVOICE:
      return { ...state, invoices: action.payload } as State;

    case types.DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          (inv) => inv.id !== Number(action.payload)
        ),
      } as State;

    case types.SET_THEME:
      return { ...state, theme: action.payload } as State;
    default:
      return state;
  }
};
export default reducer;
