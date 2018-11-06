import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../consultation/consultation/consultation.service';
import { PatientService } from '../patient/patient.service';
import { Patient } from '../patient/patient';
import { Consultation } from '../../consultation/consultation/consultation';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  patient = new Patient();
  consultations: Consultation[];
  patientId: number;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private consultationService: ConsultationService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.patientId = parseInt(params.get('id')
          )
        });

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
