import { State, Actions } from './types';
import types from './actionTypes';

const initialState = {
  invoices: [],
};

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case types.SAVE_INVOICE:
      return { ...state, invoices: [...state.invoices, action.payload] };

    default:
      return state;
  }
};
export default reducer;
