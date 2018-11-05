import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: any
  result: any;

  constructor(
    private patientService: PatientService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.patientService
      .getPatients()
      .subscribe(
        res => {
          this.patients = res;
          console.log(res);
        },
        err => {
          console.log(err)
        }
      );

  }

  viewPatientDetails() {
    this.router.navigate(['/records/patientsdetails']);
  }

}
