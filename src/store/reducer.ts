import { State, Actions, Theme } from './types';
import types from './actionTypes';
import invoices from './__mocks__/invoices';

const initialState = {
  invoices: [...invoices],
  theme: 'lightMode' as Theme,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case types.SAVE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      } as State;

    case types.SET_THEME:
      return { ...state, theme: action.payload } as State;
    default:
      return state;
  }
};
export default reducer;
