import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointment = new Appointment();
  result: any;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.appointmentService
    .getAppointments()
    .subscribe(
      res => {
        this.result = 'Appointment successfully booked.';
      },
      err => {
        console.log(err)
      }
    );

  }

  addpatient() {
    this.router.navigate(['/dashboard/addpatient']);
  }
  
  addappointment() {
    this.router.navigate(['/dashboard/addappointment']);
  }

}
