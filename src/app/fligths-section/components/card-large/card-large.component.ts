import { CurrencyStatusService } from '../../services/currency-status.service'
import { Journey } from '../../classes/Journey'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-large',
  templateUrl: './card-large.component.html',
  styleUrls: ['./card-large.component.css']
})
export class CardLargeComponent implements OnInit {
  showDetails: boolean = false;

  @Input()
  journey : Journey | undefined;

  currencySelected: any;

  constructor(
    private currencyStatusService: CurrencyStatusService,
  ) {
    this.currencyStatusService.$currencyStatus.subscribe((res : any)=>this.currencySelected = res);
   }

  ngOnInit() {
  }

  toggleDetalles() {
    this.showDetails = !this.showDetails;
  }

  getPrice(price:number, rate:number){
    if(price && rate){
      return price*rate;
    }
    return 0;
  }

}
