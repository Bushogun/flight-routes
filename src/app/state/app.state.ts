import { ActionReducerMap } from "@ngrx/store";
import { FlightsState } from "app/models/flights.state";
import { journeyReducer } from "./reducers/journey.reducers";
import { loadingReducer } from "./reducers/loading.reducer";
import { currencyReducer } from "./reducers/currency.reducer";

export interface AppState{
  journeys:FlightsState,
  loading: boolean
  currency: any
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>  = {
  journeys: journeyReducer,
  loading: loadingReducer,
  currency: currencyReducer
}
