import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabComponent } from './lab/lab.component';
import { LabHeaderComponent } from './lab-header/lab-header.component';
import { LabSideNavComponent } from './lab-side-nav/lab-side-nav.component';
import { LabResultEntryComponent } from './lab-result-entry/lab-result-entry.component';
import { LabResultComponent } from './lab-result/lab-result.component';
import { LabMainComponent } from './lab-main/lab-main.component';

@NgModule({
  imports: [
    CommonModule,
    LabRoutingModule
  ],
  declarations: [LabComponent, LabHeaderComponent, LabSideNavComponent, LabResultEntryComponent, LabResultComponent, LabMainComponent]
})
export class LabModule { }
