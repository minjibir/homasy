import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './lab/lab.component';
import { LabResultEntryComponent } from './lab-result-entry/lab-result-entry.component';
import { LabResultComponent } from './lab-result/lab-result.component';
import { LabMainComponent } from './lab-main/lab-main.component';

const routes: Routes = [
  // {
  //   path: 'lab',
  //   component: LabComponent,
  //   children: [
  //     {path: '', component: LabMainComponent},
  //     {path: 'result', component: LabResultComponent},
  //     {path: 'resultentry', component: LabResultEntryComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
