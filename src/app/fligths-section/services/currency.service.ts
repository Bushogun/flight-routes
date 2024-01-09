import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

constructor( private http : HttpClient ) {
 }

 async getRates() {
  const RATES_URL = `${environment.CURRENCYAPI}?base_currency=USD&currencies=EUR,COP,CAD`;
  return await firstValueFrom(this.http.get(RATES_URL, {headers:{apikey:environment.CURRENCYAPIKEY}}).pipe(map((res:any)=>
  {
    return { ... res.data, USD:{code:"USD", value: 1}
    }
  })));
 }

}
