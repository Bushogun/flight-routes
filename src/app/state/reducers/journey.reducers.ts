import { createReducer, on } from "@ngrx/store";
import { loadJourneys, loadedJourneys } from "../actions/journeys.actions";
import { FlightsState } from "app/models/flights.state";

export const initialState: FlightsState = { journeys: undefined };

export const journeyReducer = createReducer(
  initialState,
  on(loadJourneys, (state) => {
    return { ...state };
  }),
  on(loadedJourneys, (state, { flightsData }) => {
    return { ...state,  flightsData };
  })
);
