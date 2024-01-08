import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})

export class AppPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  titleAlert: string = '';

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
    //console.log(this.origenCtrl.value);
  }
  getDestino(event: Event) {
    event.preventDefault();
    //console.log(this.destinoCtrl.value);
  }

  async getCurrency(){
    // const currency = await this.currencyService.getRates();
    //console.log("Moneda", currency)
  }

}
