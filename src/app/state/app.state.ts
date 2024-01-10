import { ActionReducerMap } from "@ngrx/store";
import { FlightsState } from "app/models/flights.state";
import { journeyReducer } from "./reducers/journey.reducers";
import { loadingReducer } from "./reducers/loading.reducer";

export interface AppState{
  journeys:FlightsState,
  loading: boolean
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>  = {
  journeys: journeyReducer,
  loading: loadingReducer
}
