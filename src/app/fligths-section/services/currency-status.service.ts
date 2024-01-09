import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyStatusService {
  private currencySelected = new BehaviorSubject({code:'USD', value: 1});
  public $currencyStatus = this.currencySelected.asObservable();

constructor() {  }

setCurrency(currency:any){
  this.currencySelected.next(currency);
}

}
