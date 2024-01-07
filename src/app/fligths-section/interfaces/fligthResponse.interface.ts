export interface FlightResponseInterface {
  departureStation: string;
  arrivalStation:   string;
  flightCarrier:    FlightCarrierInterface;
  flightNumber:     string;
  price:            number;
}

export enum FlightCarrierInterface {
  Co = "CO",
  Es = "ES",
  MX = "MX",
}
