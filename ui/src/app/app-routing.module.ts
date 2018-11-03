import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AddPatientComponent } from './components/patient-form/patient-form.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntranceComponent } from './entrance/entrance.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { BillComponent } from './components/bill/bill.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { LabComponent } from './lab/lab/lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy/pharmacy.component';
import { AdminComponent } from './components/admin/admin.component';
import { LabMainComponent } from './lab/lab-main/lab-main.component';
import { LabResultComponent } from './lab/lab-result/lab-result.component';
import { LabResultEntryComponent } from './lab/lab-result-entry/lab-result-entry.component';

const routes: Routes = [
  { path: '', component: EntranceComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'appointments', component: AppointmentComponent },
      { path: 'addappointment', component: AppointmentFormComponent },

      { path: 'addpatient', component: AddPatientComponent },
      { path: 'patientdetails', component: PatientDetailsComponent },
      
      { path: 'consultation', component: ConsultationComponent },
      { path: 'billing', component: BillComponent },
      { path: 'accounting', component: AccountantComponent },
    ]
  },
  {
    path: 'lab',
    component: LabComponent,
    children: [
      {path: '', component: LabMainComponent},
      {path: 'result', component: LabResultComponent},
      {path: 'resultentry', component: LabResultEntryComponent}
    ]
  },
  {
    path: 'pharmacy',
    component: PharmacyComponent,
    children: [

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
