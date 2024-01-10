import { createAction, props } from "@ngrx/store";

export const loadCurrencys = createAction(
  '[Currencys List] Load Currencys'
);

export const loadedCurrencys = createAction(
  '[Currencys List] Loaded success',
  props<{currency: any }>()
);
