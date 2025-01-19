import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  // redirect to `map`
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  //  map route
  { path: 'map', component: MapComponent },
  // redirect to invalid routes
  { path: '**', redirectTo: '/map' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
