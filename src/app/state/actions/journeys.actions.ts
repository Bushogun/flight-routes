import { createAction, props } from "@ngrx/store";
import { Journey } from "app/fligths-section/classes/Journey";

export const loadJourneys = createAction(
  '[Journeys List] Load Journeys'
);

export const loadedJourneys = createAction(
  '[Journeys List] Loaded success',
  props<{flightsData: Journey}>()
);
