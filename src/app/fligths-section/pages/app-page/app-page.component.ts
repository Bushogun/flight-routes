import { CurrencyService } from './../../services/currency.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FlightService } from '../../services/flights.service';
import { Journey } from '../../classes/Journey';
import Swal from 'sweetalert2';
import { loadJourneys, loadedJourneys } from 'app/state/actions/journeys.actions';
import { Store } from '@ngrx/store'
import { selectLoading } from 'app/state/selectors/journey.selectors';
import { startLoading, stopLoading } from 'app/state/actions/loading.actions';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})

export class AppPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  loading$: Observable<boolean> = new Observable();
  tituloAlert: string = '';
  showCurrency: boolean = false;
  flightsData : Journey | undefined;

  origenCtrl = new FormControl<string>('',[
      Validators.required,
      Validators.maxLength(3),
      Validators.pattern('[A-Z]*'),
  ]);

  destinoCtrl = new FormControl<string>('',[
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('[A-Z]*'),
  ]);

  constructor(
    private store: Store <any>,
    private readonly flightService: FlightService,
    private readonly currencyService: CurrencyService,
  ){}

  async getRoute(){
    if(!this.origenCtrl.value || !this.destinoCtrl.value )
    {return};
    this.store.dispatch(startLoading());
    Swal.fire({
      title: 'Cargando',
      html: 'Buscando Rutas',
      timer: 3000,
      timerProgressBar: true,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
    })

    this.flightsData = await this.flightService.getJourney(this.origenCtrl.value , this.destinoCtrl.value);
    if (this.flightsData && this.flightsData.flights && this.flightsData.origin && this.flightsData.destination && this.flightsData.price) {
      const journeyInstance = new Journey(
        this.flightsData.flights,
        this.flightsData.origin,
        this.flightsData.destination,
        this.flightsData.price
      );
      this.store.dispatch(loadedJourneys({ flightsData: journeyInstance }));
      this.store.dispatch(stopLoading());
    }
    Swal.close();

    console.log("Journey", JSON.stringify(this.flightsData?.flights, null, 2));

    if (!this.flightsData) {
      Swal.fire('No se han encontrado rutas para este viaje', this.tituloAlert, 'error');
    } else {
      this.showCurrency = !this.showCurrency;
      Swal.fire('Se ha encontrado la ruta.', this.tituloAlert, 'success');
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getCurrency();
    this.store.dispatch(loadJourneys());
  }

  getOrigen(event: Event) {
    event.preventDefault();
  }
  getDestino(event: Event) {
    event.preventDefault();
  }

  async getCurrency(){
    const currency = await this.currencyService.getRates();
    console.log("Moneda", currency)
  }
}

