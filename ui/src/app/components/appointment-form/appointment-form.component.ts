import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { AppointmentService } from '../appointment/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  appointment: Appointment = new Appointment();

  patientId: string;
  appointmentDate: string;
  appointmentTime: string;

  errorMsg
  successMsg

  constructor(private _appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  addAppointment() {
    this._appointmentService
      .addAppointment(this.appointment)
      .subscribe(
        (res: Appointment) => {
          this.appointment = res
          this.successMsg = "Appointment successfully booked."
        },
        err => {
          console.log(err);
          this.errorMsg = "Error occured.";
        }
      );
  }

}
