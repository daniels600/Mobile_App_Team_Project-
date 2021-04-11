import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyRestaurantPageRoutingModule } from './nearby-restaurant-routing.module';

import { NearbyRestaurantPage } from './nearby-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyRestaurantPageRoutingModule
  ],
  declarations: [NearbyRestaurantPage]
})
export class NearbyRestaurantPageModule {}
