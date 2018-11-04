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
import { TestResultComponent } from './lab/test-result/test-result.component';
import { TestResultEntryComponent } from './lab/test-result-entry/test-result-entry.component';
import { TestRequestComponent } from './lab/test-request/test-request.component';
import { PharmacyMainComponent } from './pharmacy/pharmacy-main/pharmacy-main.component';
import { PrescriptionsComponent } from './pharmacy/prescriptions/prescriptions.component';
import { PrescriptionsRecordComponent } from './pharmacy/prescriptions-record/prescriptions-record.component';
import { TestResultViewComponent } from './lab/test-result-view/test-result-view.component';

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
      // { path: 'billing', component: BillComponent },
      // { path: 'accounting', component: AccountantComponent },
    ]
  },


  // Lab paths
  {
    path: 'lab',
    component: LabComponent,
    children: [
      // { path: '', component: LabMainComponent },
      { path: '', component: TestRequestComponent },
      { path: 'test-requests', component: TestRequestComponent },
      // { path: 'test-results', component: TestResultComponent },
      // { path: 'test-result-view/:id', component: TestResultViewComponent },
      { path: 'test-result-entry/:id', component: TestResultEntryComponent },
    ]
  },

  // Pharmacy paths
  {
    path: 'pharmacy',
    component: PharmacyComponent,
    children: [
      { path: '', component: PharmacyMainComponent },
      { path: 'prescriptions', component: PrescriptionsComponent },
      { path: 'records', component: PrescriptionsRecordComponent },
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
