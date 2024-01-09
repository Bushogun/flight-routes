import { CurrencyStatusService } from './../../../fligths-section/services/currency-status.service';
import { CurrencyService } from './../../../fligths-section/services/currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.css']
})

export class CurrencySelectComponent implements OnInit {
  selectedCurrency: any;
  valueCurrency: any;

  constructor(
    private currencyService : CurrencyService,
    private currencyStatusService : CurrencyStatusService,
  ) { }

  ngOnInit() {
    this.getCurrency();
  }

  async getCurrency(){
    const currency = await this.currencyService.getRates();
    this.valueCurrency = Object.values(currency)
    this.selectedCurrency = this.valueCurrency[3];
    console.log(this.valueCurrency)
  }

  selectCurrency(currency:any){
    this.currencyStatusService.setCurrency(currency);
    console.log('currency',currency)
  }

}
