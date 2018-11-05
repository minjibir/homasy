import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records/records.component';
import { RecordsMainComponent } from './records-main/records-main.component';
import { RecordsSideNavComponent } from './records-side-nav/records-side-nav.component';
import { RecordsHeaderComponent } from './records-header/records-header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientComponent } from './records/patient/patient.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AddPatientComponent } from './patient-form/patient-form.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    RecordsComponent,
    RecordsMainComponent,
    RecordsSideNavComponent,
    RecordsHeaderComponent,
    PatientComponent,
    AppointmentComponent,
    PatientComponent,
    AppointmentFormComponent,
    AddPatientComponent,
    PatientDetailsComponent
  ]
})
export class RecordsModule { }
