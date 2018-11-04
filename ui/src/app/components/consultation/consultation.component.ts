import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationService } from './consultation.service';
import { Patient } from '../patient/patient';
import { Doctor } from '../doctor/doctor';
import { Consultation } from './consultation';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {


  consultation = new Consultation();
  patient = new Patient();
  doctor = new Doctor();

  result: any;

  constructor(
    private router: Router,
    private consultationService: ConsultationService
  ) { }

  ngOnInit() {
  }

  submitConsultation() {
    if (this.consultation.patientId !== null) {
      console.log(this.consultation);
      this.consultationService
        .saveConsultation(this.consultation)
        .subscribe(
          res => {
            this.result = 'Record successfully saved.';
          },
          err => {
            this.result = 'Problem occured when saving record.'
            console.log(err);
          }
        );
    }
  }

  patientdetails() {
    this.router.navigate(['/dashboard/patientdetails']);
  }

  addappointment() {
    this.router.navigate(['/dashboard/addappointment']);
  }

}
