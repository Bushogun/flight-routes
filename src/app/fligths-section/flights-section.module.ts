import { NgModule } from '@angular/core';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/individual-fligth-card/card.component';
import { CardLargeComponent } from './components/card-large/card-large.component';
import { DecimalFormatPipe } from '../pipes/decimal-format.pipe';

@NgModule({
  declarations: [
    AppPageComponent,
    CardComponent,
    CardLargeComponent,
    DecimalFormatPipe
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FlightModule { }
