import { createReducer, on } from "@ngrx/store";
import { startLoading, stopLoading } from "../actions/loading.actions";

export const initialState: boolean = false;

export const loadingReducer = createReducer(
  initialState,
  on(startLoading, () => true),
  on(stopLoading, () => false)
);
