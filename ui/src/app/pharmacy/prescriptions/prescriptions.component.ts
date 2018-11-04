import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})
export class PrescriptionsComponent implements OnInit {

  prescriptions: Prescription[];
  prescription: Prescription;

  constructor(
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit() {
    this.prescriptionService
      .getPrescriptions()
      .subscribe(
        (res: Prescription[]) => {
          this.prescriptions = res
        },
        err => {
          console.log(err)
        }
      );
  }

  markDone(prescription: Prescription) {
    prescription.prescriptionStatus = true
    this.prescriptionService
      .update(prescription)
      .subscribe(
        res => {
          this.prescription = res
        },
        err => {
          console.log(err)
        }
      );
  }

}
