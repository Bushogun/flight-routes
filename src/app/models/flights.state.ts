import { Journey } from "app/fligths-section/classes/Journey";

export interface FlightsState{
  journeys: ReadonlyArray<Journey> | undefined;
}
