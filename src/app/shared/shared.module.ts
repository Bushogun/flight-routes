import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { CurrencySelectComponent } from './components/currency-select/currency-select.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // CurrencySelectComponent
  ],
  exports:[
    // CurrencySelectComponent
  ],
  providers:[
    ]
})
export class SharedModule { }
