import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmacyHeaderComponent } from './pharmacy-header/pharmacy-header.component';

@NgModule({
  imports: [
    CommonModule,
    PharmacyRoutingModule
  ],
  declarations: [PharmacyComponent, PharmacyHeaderComponent]
})
export class PharmacyModule { }
