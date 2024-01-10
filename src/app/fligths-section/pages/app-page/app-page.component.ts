import { CurrencyService } from './../../services/currency.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlightService } from '../../services/flights.service';
import { Journey } from '../../classes/Journey';
import { loadJourneys, loadedJourneys } from 'app/state/actions/journeys.actions';
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { selectLoading, selectCurrency } from 'app/state/selectors/journey.selectors';
import { startLoading, stopLoading } from 'app/state/actions/loading.actions';
import { SwalService } from 'app/fligths-section/services/swal.service';
import * as CurrencyActions from 'app/state/actions/currency.actions';
import { from } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {
  loading$: Observable<boolean>;
  currency$: Observable<any>;
  tituloAlert: string = '';
  showCurrency: boolean = false;
  flightsData: Journey | undefined;

  origenCtrl = new FormControl<string>('', [
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('[A-Z]*'),
  ]);

  destinoCtrl = new FormControl<string>('', [
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('[A-Z]*'),
  ]);

  constructor(
    private store: Store<AppState>,
    private readonly flightService: FlightService,
    private readonly swalService: SwalService,
    private readonly currencyService: CurrencyService
  ) {
    this.loading$ = this.store.pipe(select(selectLoading));
    this.currency$ = this.store.pipe(select(selectCurrency));
  }

  async getRoute() {
    if (!this.origenCtrl.value || !this.destinoCtrl.value) {
      return;
    }
    this.store.dispatch(startLoading());
    this.swalService.showLoadingAlert();

    try {
      this.flightsData = await this.flightService.getJourney(this.origenCtrl.value, this.destinoCtrl.value);
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
      this.swalService.closeAlert();
      if (!this.flightsData) {
        this.swalService.showErrorAlert('No se han encontrado rutas para este viaje');
      } else {
        this.showCurrency = !this.showCurrency;
        this.swalService.showSuccessAlert('Se ha encontrado la ruta.');
        this.dispatchCurrency();  // Llamada a la función dispatchCurrency
      }
    } catch (error) {
      this.swalService.showErrorAlert('Algo salió mal.');
      this.store.dispatch(stopLoading());
    }
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

  async getCurrency() {
    const currency = await this.currencyService.getRates();
    console.log('Moneda', currency);
  }

  dispatchCurrency() {
    const currencyPromise = this.currencyService.getRates();
    const currencyObservable = from(currencyPromise);
    currencyObservable.subscribe(currency => {
      this.store.dispatch(CurrencyActions.loadedCurrencys({ currency }));
    });
  }
}
