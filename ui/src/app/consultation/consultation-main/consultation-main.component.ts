import { Component, OnInit } from '@angular/core';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../../lab/test-types';
import { Consultation } from '../consultation/consultation';
import { Patient } from '../../records/patient/patient';
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
    console.log(this.consultation);
    console.log(this.prescription);
    console.log(this.testRequest);
    // if (
    //   this.consultation.diagnosis !== null &&
    //   this.consultation.statement !== null &&
    //   this.prescription.prescriptionContent !== null
    // ) {
    //   this.consultationService
    //     .saveConsultation(this.consultation)
    //     .subscribe(
    //       (res: Consultation) => {
    //         this.consultation = res;

    //         this.prescription.consultationId = this.consultation.consultationId;
    //         this.testRequest.consultationId = this.consultation.consultationId;

    //         this.savePrescription();
    //         this.requestTest();

    //         console.log(res)
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     );
    // }
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
