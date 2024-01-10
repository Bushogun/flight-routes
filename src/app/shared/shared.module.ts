import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { SweetAlertComponent } from '../shared/components/modal-swal/swal-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CurrencySelectComponent,
    SweetAlertComponent
  ],
  exports:[
    CurrencySelectComponent,
    SweetAlertComponent
  ],
  providers:[
    ]
})
export class SharedModule { }
