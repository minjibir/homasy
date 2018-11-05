import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntranceComponent } from './entrance/entrance.component';
import { LabComponent } from './lab/lab/lab.component';
import { PharmacyComponent } from './pharmacy/pharmacy/pharmacy.component';
import { TestResultEntryComponent } from './lab/test-result-entry/test-result-entry.component';
import { TestRequestComponent } from './lab/test-request/test-request.component';
import { PharmacyMainComponent } from './pharmacy/pharmacy-main/pharmacy-main.component';
import { PrescriptionsComponent } from './pharmacy/prescriptions/prescriptions.component';
import { PrescriptionsRecordComponent } from './pharmacy/prescriptions-record/prescriptions-record.component';
import { AppointmentComponent } from './records/appointment/appointment.component';
import { AppointmentFormComponent } from './records/appointment-form/appointment-form.component';
import { AddPatientComponent } from './records/patient-form/patient-form.component';
import { PatientDetailsComponent } from './records/patient-details/patient-details.component';
import { ConsultationComponent } from './consultation/consultation/consultation.component';
import { RecordsMainComponent } from './records/records-main/records-main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', component: EntranceComponent },
  { path: 'login', component: LoginComponent },

  // Records paths
  {
    path: 'records',
    component: RecordsMainComponent,
    children: [
      { path: '', component: AppointmentComponent },
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

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
