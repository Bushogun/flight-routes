import { CurrencyService } from './../../services/currency.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FlightService } from '../../services/flights.service';
import { Journey } from '../../classes/Journey';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})

export class AppPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
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
    private readonly flightService: FlightService,
    private readonly currencyService: CurrencyService,
  ){}

  async getRoute(){
    if(!this.origenCtrl.value || !this.destinoCtrl.value )
    {return};

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
    Swal.close();
    //console.log("Journey", fligthsData)

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
    // this.subscription.add(
    // this.origenCtrl.valueChanges
    //   .pipe(debounceTime(350))
    //   .subscribe(value => {
    //     console.log(value);
    //   })
    // );
    // this.subscription.add(
    // this.destinoCtrl.valueChanges.subscribe(value => {
    //   console.log(value);
    // })
    // );
  }

  getOrigen(event: Event) {
    event.preventDefault();
    console.log(this.origenCtrl.value);
  }
  getDestino(event: Event) {
    event.preventDefault();
    console.log(this.destinoCtrl.value);
  }

  async getCurrency(){
    const currency = await this.currencyService.getRates();
    console.log("Moneda", currency)
  }
}

