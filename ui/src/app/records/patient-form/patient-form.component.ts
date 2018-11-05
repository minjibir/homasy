import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient';
import { PatientService } from '../patient/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient();

  errorMsg = null;
  successMsg = null;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  registerPatient() {
    console.log(this.patient);
    this.patientService
      .registerPatient(this.patient)
      .subscribe(
        (res: Patient) => {
          this.patient = res
          this.successMsg = "Patient successfully registered."
        },
        err => {
          console.log(err);
          this.errorMsg = "Error occured.";
        }
      );
  }

}
