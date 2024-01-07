import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../app/fligths-section/pages/layout-page/layout-page.component';
import { ErrorPageComponent } from '../app/shared/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'flights',
    component: LayoutPageComponent,
    //loadChildren: () => import('./flights/pages/layout-page/layout-page.component').then( m => m.FlightModule ),
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
