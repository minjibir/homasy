import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationService } from './consultation.service';
import { Patient } from '../../records/patient/patient';
import { Consultation } from './consultation';
import { Prescription } from '../../pharmacy/prescription';
import { TestRequest } from '../../lab/test-request';
import { PrescriptionService } from '../../pharmacy/prescription.service';
import { TestService } from '../../lab/test.service';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../../lab/test-types';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  chemistry = CHEMISTRY;
  microbiology = MICROBIOLOGY;
  haematology = HAEMATOLOGY;

  consultation = new Consultation();
  patient = new Patient();
  prescription = new Prescription();
  testRequest = new TestRequest();

  constructor(
    private router: Router,
    private consultationService: ConsultationService,
    private prescriptionService: PrescriptionService,
    private testService: TestService,
  ) { }

  ngOnInit() {
  }

  submitConsultation() {
    if (
      this.consultation.diagnosis !== null &&
      this.consultation.statement !== null &&
      this.prescription.prescriptionContent !== null
    ) {
      this.consultationService
        .saveConsultation(this.consultation)
        .subscribe(
          (res: Consultation) => {
            this.consultation = res;

            this.prescription.consultationId = this.consultation.consultationId;
            this.testRequest.consultationId = this.consultation.consultationId;

            this.savePrescription();
            this.requestTest();

            console.log(res)
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  savePrescription() {
    this.prescriptionService
      .addPrescription(this.prescription)
      .subscribe(
        (res: Prescription) => {
          this.prescription = res;
          console.log(res)
        },
        err => {
          console.log(err);
        }
      );
  }

  requestTest() {
    if (
      this.testRequest.testsRequested !== null &&
      this.testRequest.testsRequested !== ''
    ) {
      this.testService
        .makeTestRequest(this.testRequest)
        .subscribe(
          (res: TestRequest) => {
            this.testRequest = res;
            console.log(res)
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  patientdetails() {
    this.router.navigate(['/records/patientdetails']);
  }

  addappointment() {
    this.router.navigate(['/records/addappointment']);
  }

}
