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
import { RecordsComponent } from './records/records/records.component';
import { PatientComponent } from './records/patient/patient.component';
import { ConsultationMainComponent } from './consultation/consultation-main/consultation-main.component';

const routes: Routes = [

  { path: '', component: EntranceComponent },
  { path: 'login', component: LoginComponent },

  // Records paths
  {
    path: 'records',
    component: RecordsComponent,
    children: [
      { path: '', component: RecordsMainComponent },
      { path: 'patients', component: PatientComponent },
      { path: 'appointments', component: AppointmentComponent },
      { path: 'addpatient', component: AddPatientComponent },
      { path: 'addappointment/:patientId', component: AppointmentFormComponent },
      { path: 'patientdetails/:patientId', component: PatientDetailsComponent },
    ]
  },

  // Consultation paths
  {
    path: 'consultation',
    component: ConsultationComponent,
    children: [
      { path: '', component: ConsultationMainComponent },
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
