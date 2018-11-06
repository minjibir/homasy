import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../consultation/consultation/consultation.service';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient;
  consultations: any;
  patientId: number;

  constructor(
    private patientService: PatientService,
    private consultationService: ConsultationService
  ) { }

  ngOnInit() {

    this.getPatient();
    this.getConsultationsRecord();
  }

  getPatient() {
    this.patientService
      .getPatientById(this.patientId)
      .subscribe(
        res => {
          this.patient = res;
        },
        err => {
          console.log(err)
        }
      );
  }

  getConsultationsRecord() {
    this.consultationService
      .getConsultationsByPatient(this.patientId)
      .subscribe(
        res => {
          this.consultations = res;
        },
        err => {
          console.log(err)
        }
      );
  }
}
