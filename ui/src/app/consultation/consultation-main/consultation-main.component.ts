import { Component, OnInit } from '@angular/core';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../../lab/test-types';
import { Consultation } from '../consultation/consultation';
import { Prescription } from '../../pharmacy/prescription';
import { TestRequest } from '../../lab/test-request';
import { Router } from '@angular/router';
import { ConsultationService } from '../consultation/consultation.service';
import { PrescriptionService } from '../../pharmacy/prescription.service';
import { TestService } from '../../lab/test.service';

@Component({
  selector: 'app-consultation-main',
  templateUrl: './consultation-main.component.html',
  styleUrls: ['./consultation-main.component.scss']
})
export class ConsultationMainComponent implements OnInit {

  chemistry = CHEMISTRY;
  microbiology = MICROBIOLOGY;
  haematology = HAEMATOLOGY;

  patientId: number;

  consultation = new Consultation();
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
      this.consultation.patientId = this.patientId;

      this.consultationService
        .saveConsultation(this.consultation)
        .subscribe(
          (res: Consultation) => {
            this.consultation = res;

            this.prescription.consultationId = this.consultation.consultationId;
            this.testRequest.consultationId = this.consultation.consultationId;

            this.savePrescription();
            this.requestTest();

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
        },
        err => {
          console.log(err);
        }
      );
  }

  requestTest() {
    this.testRequest.patientId = this.patientId;
    this.testRequest.consultationId = this.consultation.consultationId;

    if (
      this.testRequest.patientId !== 0 &&
      this.testRequest.consultationId !== 0 &&
      this.testRequest.testsRequested !== '' &&
      this.testRequest.testsRequested !== null
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
    if (this.patientId !== null && this.patientId !== undefined)
      this.router.navigate(['/records/patientdetails', this.patientId]);
  }

  addappointment() {
    if (this.patientId !== null && this.patientId !== undefined)
      this.router.navigate(['/records/addappointment', this.patientId]);
  }

}
