import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPageComponent } from './fligths-section/pages/app-page/app-page.component';
import { ErrorPageComponent } from '../app/shared/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'flights',
    component: AppPageComponent,
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
