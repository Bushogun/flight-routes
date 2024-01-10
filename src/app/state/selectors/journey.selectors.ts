import { createSelector } from "@ngrx/store";
import { FlightsState } from "app/models/flights.state";
import { AppState } from "../app.state";

export const selectJourneyFeature = (state: AppState) => state.journeys;
export const selectLoadingFeature = (state: AppState) => state.loading;
export const selectCurrencyFeature = (state: AppState) => state.currency;


  export const selectAllJourney = createSelector(
    selectJourneyFeature,
    (state: FlightsState) => state.journeys
  );

  export const selectLoading = createSelector(
    selectLoadingFeature,
    (loading: boolean) => loading
  );

  export const selectCurrency = createSelector(
    selectCurrencyFeature,
    (currency: any) => currency
  );
