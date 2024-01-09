import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../classes/Flight';
import { CurrencyStatusService } from '../../services/currency-status.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: []
})
export class CardComponent implements OnInit {

  @Input()
  flight : Flight | undefined;

  currencySelected: any;

  constructor(
    private currencyStatusService: CurrencyStatusService,
  ) {
         this.currencyStatusService.$currencyStatus.subscribe((res)=>this.currencySelected = res);
  }
  ngOnInit() {
  }

  getPrice(price:number, rate:number){
    if(price && rate){
      return price*rate;
    }
    return 0;
  }

}
