import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
    this.router.navigate(['/dashboard/patientsdetails']);
  }
}
