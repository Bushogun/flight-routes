import { Transport } from "./Transport";

export class Flight{

  constructor( public transport: Transport,
               public origin: string,
               public destination: string,
               public price: number ){
  }
}
