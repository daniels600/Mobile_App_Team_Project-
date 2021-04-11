import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyRestaurantPage } from './nearby-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyRestaurantPageRoutingModule {}
