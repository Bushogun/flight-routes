import { JourneyService } from './journey.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom, map } from 'rxjs';
import { FlightResponseInterface } from '../interfaces/fligthResponse.interface';
import { flightMapper } from '../mappers/flight.mapper';
import { Flight } from '../classes/Flight';

@Injectable({
  providedIn: 'root'
})

export class FlightService {
  flightList : any = [];
  constructor(private http: HttpClient,
              private journeyService: JourneyService
  ){}

  async getFlightsFromApi (): Promise<Flight[]>{
    const SERVICE_URL = `${environment.APIURL}${environment.TYPE}`;
    return await firstValueFrom(this.http.get<FlightResponseInterface[]>(SERVICE_URL).pipe(map((res)=>flightMapper(res))));
  }

  async getFlights(){
    if(this.flightList.length === 0){
      this.flightList = await this.getFlightsFromApi()
    } return this.flightList
  }

  async getJourney ( origin: string, destination: string){
    const flights = await this.getFlights();
    return this.journeyService.findCheapestRoute(flights, origin, destination);
  }
}
