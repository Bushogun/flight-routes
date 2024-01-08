import { NgModule } from '@angular/core';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AppPageComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FlightModule { }
