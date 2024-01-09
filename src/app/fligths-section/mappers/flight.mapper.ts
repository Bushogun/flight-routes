import { Transport } from '../classes/Transport';
import { Flight } from '../classes/Flight';
import { FlightResponseInterface } from './../interfaces/fligthResponse.interface';

export function flightMapper(flightResponse:FlightResponseInterface[]):Flight[]{
  const result = flightResponse.map((elemnt)=>{
    const transport: Transport = new Transport(elemnt.flightCarrier, elemnt.flightNumber);
    const flight: Flight = new Flight(transport, elemnt.departureStation, elemnt.arrivalStation, elemnt.price);
    return flight;
  })
  return result;
}
