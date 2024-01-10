import { createReducer, on } from "@ngrx/store";
import { loadCurrencys, loadedCurrencys} from "../actions/currency.actions";

export const initialState: any = undefined;

export const currencyReducer = createReducer(
  initialState,
  on(loadCurrencys, (state) => {
    return { ...state };
  }),
  on(loadedCurrencys, (state, { currency }) => {
    return { ...state,  currency };
  })
);


