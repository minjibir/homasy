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

const routes: Routes = [
  { path: '', component: EntranceComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'appointments', component: AppointmentComponent },
      { path: 'addappointment', component: AppointmentFormComponent },

      { path: 'addpatient', component: AddPatientComponent },
      { path: 'patientdetails', component: PatientDetailsComponent },
      
      { path: 'consultation', component: ConsultationComponent },
      { path: 'billing', component: BillComponent },
      { path: 'accounting', component: AccountantComponent },
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
