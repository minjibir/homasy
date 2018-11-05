import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { AppointmentService } from '../appointment/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  appointment = new Appointment();

  patientId: string;
  appointmentDate: string;
  appointmentTime: string;

  errorMsg = '';
  successMsg = '';

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  addAppointment() {

    if (
      this.appointment.appointmentDate !== undefined &&
      this.appointment.appointmentTime !== undefined &&
      this.appointment.patientId !== null
    ) {
      console.log(this.appointment);
      this.appointmentService
        .addAppointment(this.appointment)
        .subscribe(
          (res: Appointment) => {
            this.appointment = res
            this.successMsg = "Appointment successfully booked."
            console.log(this.successMsg)
          },
          err => {
            console.log(err);
            this.errorMsg = "Error occured.";
          }
        );
    }
  }

}
